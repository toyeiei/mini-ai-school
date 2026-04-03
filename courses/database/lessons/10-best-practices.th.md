# แนวปฏิบัติที่ดี

กฎปฏิบัติจริงที่สรุปจากประสบการณ์หลายปีในการทำงานกับ database

## ออกแบบก่อน

### เริ่มจากแบบ Normalized

```sql
-- ดี: ตารางแบบ normalized
users (id, name, email)
orders (id, user_id, date)
order_items (id, order_id, product_id, quantity)
products (id, name, price)
```

### Denormalize เฉพาะเมื่อจำเป็น

```sql
-- เพิ่มข้อมูลซ้ำซ้อนเฉพาะเมื่อมีปัญหาประสิทธิภาพที่พิสูจน์แล้ว
orders (id, user_id, date, total_amount)  -- total_amount เป็นค่า cache
```

การ denormalize ก่อนเวลาอันควรจะสร้างปัญหาในการดูแลรักษา

## การเขียน Query

### ระบุคอลัมน์ให้ชัดเจน

```sql
-- ไม่ดี: SELECT *
SELECT * FROM users WHERE id = 1;

-- ดี: ระบุชื่อคอลัมน์
SELECT id, name, email FROM users WHERE id = 1;
```

การระบุคอลัมน์ชัดเจนจะ:
- เร็วกว่า (ไม่ต้องอ่าน metadata)
- ปลอดภัยกว่า (ไม่พังถ้าตารางเพิ่มคอลัมน์ blob)
- เข้าใจง่ายกว่า (บอกว่าต้องการอะไร)

### ใช้ Alias ที่มีความหมาย

```sql
-- ไม่ดี
SELECT u.id, o.id FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- ดี
SELECT u.id AS user_id, o.id AS order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

## ความปลอดภัย

### อย่าไว้ใจ input จากผู้ใช้

```sql
-- ไม่ดี: เสี่ยงต่อ SQL injection
"SELECT * FROM users WHERE name = '" + user_input + "'"

-- ดี: ใช้ parameterized queries
"SELECT * FROM users WHERE name = ?"
-- Parameter ถูกส่งแยกต่างหาก
```

### ปกป้องข้อมูลที่ละเอียดอ่อน

- อย่าเก็บรหัสผ่านเป็นข้อความธรรมดา (ให้ hash แทน)
- เข้ารหัสข้อมูลที่ละเอียดอ่อน
- ใช้ HTTPS สำหรับการเชื่อมต่อ database ทุกครั้ง

## ประสิทธิภาพ

### สร้าง Index อย่างมีเหตุผล

```sql
-- เพิ่ม index บนคอลัมน์ที่กรอง/เรียงลำดับบ่อย
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

แต่อย่าสร้าง index เกินไป:
- Index ทำให้ INSERT และ UPDATE ช้าลง
- ปกติหนึ่ง index ต่อ query ก็เพียงพอ
- `EXPLAIN` แสดง query plan

### จำกัดผลลัพธ์

```sql
-- ไม่ดี: ดึงแถวทั้งหมด
SELECT * FROM logs;

-- ดี: แบ่งหน้า
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;
```

### หลีกเลี่ยง SELECT * ใน Join

```sql
-- ไม่ดี: ดึงคอลัมน์ที่ไม่จำเป็น
SELECT * FROM orders o
INNER JOIN users u ON o.user_id = u.id;

-- ดี: เฉพาะคอลัมน์ที่ต้องการ
SELECT o.id, o.created_at, u.email FROM orders o
INNER JOIN users u ON o.user_id = u.id;
```

## การดูแลรักษา

### ทดสอบ Query ที่เปลี่ยนแปลงข้อมูล

```sql
-- ก่อนลบ ให้ select ก่อน
SELECT * FROM users WHERE city = 'Closed';

-- จากนั้นค่อยลบ
DELETE FROM users WHERE city = 'Closed';
```

### เก็บ Backup

```sql
-- SQLite backup
sqlite3 database.db ".backup backup.db"

-- ส่งออกเป็น SQL
sqlite3 database.db ".dump" > dump.sql
```

### จัดการเวอร์ชัน Schema

ใช้ migration files:

```sql
-- 001_create_users.sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- 002_add_city_to_users.sql
ALTER TABLE users ADD COLUMN city TEXT;
```

## การจัดการ Error

### ตรวจสอบ Error

```sql
-- หลัง CREATE TABLE ให้ตรวจสอบ
SELECT * FROM sqlite_master WHERE type='table' AND name='users';

-- หลัง INSERT ให้ตรวจสอบจำนวนแถว
SELECT changes();
```

### ใช้ Transactions

```sql
BEGIN TRANSACTION;

-- หลาย operation ที่เกี่ยวข้องกัน
INSERT INTO orders (user_id) VALUES (1);
UPDATE products SET stock = stock - 1 WHERE id = 1;

COMMIT;  -- หรือ ROLLBACK ถ้าเกิด error
```

ถ้าขั้นตอนใดขั้นตอนหนึ่งล้มเหลว transaction ทั้งหมดจะถูกยกเลิก

## ข้อผิดพลาดที่พบบ่อย

1. **ลืม WHERE** - UPDATE/DELETE กระทบกับทุกแถว
2. **ไม่ใช้ transactions** - การอัปเดตบางส่วนทำให้ข้อมูลไม่สอดคล้องกัน
3. **มองข้าม NULLs** - NULL != NULL (ให้ใช้ IS NULL)
4. **เก็บวันที่เป็นข้อความ** - ให้ใช้ DATE type
5. **ใช้ SELECT *** - การระบุคอลัมน์ชัดเจนดีกว่า
6. **ไม่สร้าง index บน foreign keys** - Join จะช้า

## แหล่งข้อมูลเพิ่มเติม

- SQL database แตกต่างกัน: PostgreSQL, MySQL, SQLite มีความเฉพาะตัวของตัวเอง
- SQL standard ครอบคลุม 90% ของสิ่งที่ใช้กันทั่วไป
- เรียนรู้คุณสมบัติเฉพาะและข้อจำกัดของ database ที่คุณใช้

คุณจบ Database 101 แล้ว คุณสามารถออกแบบ สร้าง ค้นหา และดูแลรักษา database ได้แล้ว

ให้ฝึกฝนต่อไป ทุก database ที่คุณทำงานด้วยจะสอนอะไรใหม่ๆ ให้คุณเสมอ

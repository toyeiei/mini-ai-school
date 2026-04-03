# แนวปฏิบัติที่ดี

กฎปฏิบัติจริงที่สรุปจากประสบการณ์หลายปีในการทำงานกับ database

## ออกแบบก่อน

### เริ่มจากแบบ Normalized

```
-- Good: Normalized tables
users (id, name, email)
orders (id, user_id, date)
order_items (id, order_id, product_id, quantity)
products (id, name, price)
```

### Denormalize เฉพาะเมื่อจำเป็น

```
-- Only add redundant data if you have a proven performance issue
orders (id, user_id, date, total_amount)  -- total_amount cached
```

การ denormalize ก่อนเวลาอันควรจะสร้างปัญหาในการดูแลรักษา

## การเขียน Query

### ระบุคอลัมน์ให้ชัดเจน

```
-- Bad: SELECT *
SELECT * FROM users WHERE id = 1;

-- Good: Name the columns
SELECT id, name, email FROM users WHERE id = 1;
```

การระบุคอลัมน์ชัดเจนจะ:
- เร็วกว่า (ไม่ต้องอ่าน metadata)
- ปลอดภัยกว่า (ไม่พังถ้าตารางเพิ่มคอลัมน์ blob)
- เข้าใจง่ายกว่า (บอกว่าต้องการอะไร)

### ใช้ Alias ที่มีความหมาย

```
-- Bad
SELECT u.id, o.id FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- Good
SELECT u.id AS user_id, o.id AS order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

## ความปลอดภัย

### อย่าไว้ใจ input จากผู้ใช้

```
-- Bad: SQL injection vulnerable
"SELECT * FROM users WHERE name = '" + user_input + "'"

-- Good: Use parameterized queries
"SELECT * FROM users WHERE name = ?"
-- Parameter passed separately
```

### ปกป้องข้อมูลที่ละเอียดอ่อน

- อย่าเก็บรหัสผ่านเป็นข้อความธรรมดา (ให้ hash แทน)
- เข้ารหัสข้อมูลที่ละเอียดอ่อน
- ใช้ HTTPS สำหรับการเชื่อมต่อ database ทุกครั้ง

## ประสิทธิภาพ

### สร้าง Index อย่างมีเหตุผล

```
-- Add index on columns you filter/sort often
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

แต่อย่าสร้าง index เกินไป:
- Index ทำให้ INSERT และ UPDATE ช้าลง
- ปกติหนึ่ง index ต่อ query ก็เพียงพอ
- `EXPLAIN` แสดง query plan

### จำกัดผลลัพธ์

```
-- Bad: Get all rows
SELECT * FROM logs;

-- Good: Paginate
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;
```

### หลีกเลี่ยง SELECT * ใน Join

```
-- Bad: Pulls unnecessary columns
SELECT * FROM orders o
INNER JOIN users u ON o.user_id = u.id;

-- Good: Only needed columns
SELECT o.id, o.created_at, u.email FROM orders o
INNER JOIN users u ON o.user_id = u.id;
```

## การดูแลรักษา

### ทดสอบ Query ที่เปลี่ยนแปลงข้อมูล

```
-- Before deleting, select first
SELECT * FROM users WHERE city = 'Closed';

-- Then delete
DELETE FROM users WHERE city = 'Closed';
```

### เก็บ Backup

```
-- SQLite backup
sqlite3 database.db ".backup backup.db"

-- Export to SQL
sqlite3 database.db ".dump" > dump.sql
```

### จัดการเวอร์ชัน Schema

ใช้ migration files:

```
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

```
-- After CREATE TABLE, verify
SELECT * FROM sqlite_master WHERE type='table' AND name='users';

-- After INSERT, check row count
SELECT changes();
```

### ใช้ Transactions

```sql
BEGIN TRANSACTION;

-- Multiple related operations
INSERT INTO orders (user_id) VALUES (1);
UPDATE products SET stock = stock - 1 WHERE id = 1;

COMMIT;  -- Or ROLLBACK if error
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

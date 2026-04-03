# CRUD Operations

CRUD ย่อมาจาก 4 operations พื้นฐานที่คุณทำกับข้อมูล:
- **C**reate - เพิ่มข้อมูลใหม่
- **R**ead - ค้นหาข้อมูลที่มีอยู่
- **U**pdate - แก้ไขข้อมูลที่มีอยู่
- **D**elete - ลบข้อมูล

## Create (INSERT)

เพิ่มแถวใหม่ในตาราง

### เพิ่มหนึ่งแถว

```sql
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@email.com', 28);
```

### เพิ่มหลายแถว

```sql
INSERT INTO users (name, email, age)
VALUES
    ('Bob', 'bob@email.com', 34),
    ('Charlie', 'charlie@email.com', 22),
    ('Diana', 'diana@email.com', 45);
```

### เพิ่มโดยใช้ค่าเริ่มต้น

ถ้าคอลัมน์มีค่าเริ่มต้น คุณสามารถละเว้นได้:

```sql
INSERT INTO users (name, email)
VALUES ('Eve', 'eve@email.com');
```

คอลัมน์ `age` จะใช้ค่าเริ่มต้น (หรือ NULL ถ้าไม่มีค่าเริ่มต้น)

## Read (SELECT)

ดึงข้อมูลจากตาราง เราได้เรียนรู้ SELECT ไปแล้วในบทเรียนก่อนหน้า

### Select พื้นฐาน

```sql
SELECT * FROM users;
```

### Select เฉพาะคอลัมน์

```sql
SELECT name, email FROM users;
```

## Update (UPDATE)

แก้ไขแถวที่มีอยู่

### Update ทุกแถว

```sql
UPDATE users SET age = 30;
```

ผู้ใช้ทุกคนจะมีอายุ 30 ทุกคน

### Update เฉพาะแถว

ใช้ WHERE เพื่อระบุแถวเป้าหมาย:

```sql
UPDATE users SET age = 29 WHERE name = 'Alice';
```

มีเพียงอายุของ Alice เท่านั้นที่เปลี่ยน

### Update หลายคอลัมน์

```sql
UPDATE users
SET age = 35, city = 'New York'
WHERE email = 'bob@email.com';
```

## Delete (DELETE)

ลบแถวออกจากตาราง

### Delete ทุกแถว

```sql
DELETE FROM users;
```

ผู้ใช้ทุกคนถูกลบ โครงสร้างตารางยังคงอยู่

### Delete เฉพาะแถว

```sql
DELETE FROM users WHERE id = 3;
```

มีเพียงผู้ใช้ที่มี id=3 เท่านั้นที่ถูกลบ

### ความปลอดภัยก่อนอื่นเสมอ: ใช้ WHERE เสมอ

```sql
-- อันตราย! ลบผู้ใช้ที่อายุเกิน 100 (น่าจะเป็นทุกคน)
DELETE FROM users WHERE age > 100;
```

## รวมทั้งหมด

ตัวอย่างเต็ม:

```sql
-- สร้างตาราง
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
);

-- เพิ่มสินค้า
INSERT INTO products (name, price, stock)
VALUES
    ('Laptop', 999.99, 10),
    ('Mouse', 29.99, 50),
    ('Keyboard', 79.99, 25);

-- อัปเดตจำนวนในสต็อก
UPDATE products SET stock = 8 WHERE name = 'Laptop';

-- ตรวจสอบผลลัพธ์
SELECT * FROM products;

-- ลบสินค้าที่หมดสต็อก
DELETE FROM products WHERE stock = 0;
```

## จำไว้

- **INSERT** เพิ่มข้อมูลใหม่
- **SELECT** อ่านข้อมูล
- **UPDATE** แก้ไขข้อมูลที่มีอยู่
- **DELETE** ลบข้อมูล
- ใช้ **WHERE** กับ UPDATE และ DELETE เสมอ เว้นแต่คุณต้องการกระทบกับทุกแถว

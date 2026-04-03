# ตารางและคอลัมน์

ตารางคือส่วนประกอบพื้นฐานของ relational database แต่ละตารางเก็บข้อมูลเกี่ยวกับสิ่งหนึ่งประเภท

## โครงสร้างของตาราง

```
users table
+--------+------------------+---------+----------+
| id (PK)| email            | name    | age      |
+--------+------------------+---------+----------+
| 1      | alice@email.com  | Alice   | 28       |
| 2      | bob@email.com    | Bob     | 34       |
+--------+------------------+---------+----------+
  └─ Primary Key
```

- **Rows** (records) - ข้อมูลแต่ละรายการ (Alice, Bob)
- **Columns** (fields) - คุณสมบัติ (email, name, age)

## การสร้างตาราง

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER
);
```

## Data Types

Data types ที่ใช้บ่อยใน SQL:

| Type | คำอธิบาย | ตัวอย่าง |
|------|-------------|---------|
| INTEGER | จำนวนเต็ม | 1, 42, -7 |
| TEXT | ข้อความ | "Alice" |
| REAL | ทศนิยม | 3.14, 99.9 |
| BLOB | ข้อมูลไบนารี | รูปภาพ, ไฟล์ |
| DATE | วันที่ | 2024-01-15 |

## Constraints

Constraints กำหนดกฎเกี่ยวกับข้อมูล:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,        -- ตัวระบุเฉพาะ
    email TEXT UNIQUE NOT NULL,    -- ต้องมีค่า และไม่ซ้ำกัน
    name TEXT NOT NULL,            -- ต้องมีค่า
    age INTEGER DEFAULT 0          -- ค่าเริ่มต้นเป็น 0 ถ้าไม่ระบุ
);
```

### Constraints ที่ใช้บ่อย

- **PRIMARY KEY** - ตัวระบุเฉพาะสำหรับแต่ละแถว
- **NOT NULL** - ต้องมีค่าเสมอ
- **UNIQUE** - ไม่อนุญาตให้ค่าซ้ำกัน
- **DEFAULT** - ค่าเริ่มต้นถ้าไม่ได้ระบุ
- **CHECK** - ตรวจสอบเงื่อนไข

## ดูโครงสร้างตาราง

ดูว่าตารางสร้างอย่างไร:

```sql
.schema users
```

ผลลัพธ์:
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER
);
```

## แก้ไขตาราง

เพิ่มคอลัมน์ใหม่:

```sql
ALTER TABLE users ADD COLUMN city TEXT;
```

ตารางตอนนี้จะเป็นแบบนี้:
```
+--------+------------------+---------+----------+-------+
| id     | email            | name    | age      | city  |
+--------+------------------+---------+----------+-------+
| 1      | alice@email.com  | Alice   | 28       | NULL  |
+--------+------------------+---------+----------+-------+
```

## ลบตาราง

คำเตือน: การนี้จะลบตารางและข้อมูลทั้งหมด!

```sql
DROP TABLE users;
```

## การตั้งชื่อที่แนะนำ

- ชื่อตาราง: รูปพหูพจน์, ตัวพิมพ์เล็ก, ใช้ underscore (`users`, `order_items`)
- ชื่อคอลัมน์: ตัวพิมพ์เล็ก, บอกความหมาย (`created_at`, `user_id`)
- Primary key: `id` หรือ `table_name_id`
- Foreign key: `other_table_id` (เช่น `user_id`)

ตอนนี้คุณเข้าใจว่าตารางทำงานอย่างไรแล้ว ต่อไปเราจะเรียนรู้การเพิ่มข้อมูลลงไป

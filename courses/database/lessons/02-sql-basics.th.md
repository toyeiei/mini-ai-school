# SQL เบื้องต้น

SQL (Structured Query Language) คือภาษามาตรฐานสำหรับสื่อสารกับ database ช่วยให้คุณสร้าง อ่าน อัปเดต และลบข้อมูลได้

## Query แรกของคุณ

SQL query ที่พื้นฐานที่สุดคือการดึงข้อมูลทั้งหมดจากตาราง:

```sql
SELECT * FROM users;
```

นี่หมายความว่า: "เลือกคอลัมน์ทั้งหมดจากตาราง users"

## แยกส่วน Query

- **SELECT** - ข้อมูลที่คุณต้องการ
- **\*** - คอลัมน์ทั้งหมด (หรือระบุคอลัมน์ที่ต้องการเฉพาะ)
- **FROM** - ตารางไหน
- **users** - ชื่อตาราง

## เลือกคอลัมน์เฉพาะ

ไม่จำเป็นต้องเอาทุกคอลัมน์? ระบุเฉพาะที่ต้องการ:

```sql
SELECT name, email FROM users;
```

ผลลัพธ์:
```sql
+------------------+---------+
| email            | name    |
+------------------+---------+
| alice@email.com  | Alice   |
| bob@email.com    | Bob     |
+------------------+---------+
```

## การเขียน Comment

Comment ช่วยให้คุณอธิบาย query ของคุณ:

```sql
-- This query gets all users
SELECT * FROM users;

SELECT email FROM users; /* Get emails only */
```

## ตัวพิมพ์ใหญ่-เล็ก

SQL keyword ไม่สนใจตัวพิมพ์ใหญ่-เล็ก แต่มักนิยมใช้ตัวพิมพ์ใหญ่:

```sql
-- All of these work:
SELECT * FROM users;
select * from users;
SeLeCt * FrOm users;
```

## Semicolons

จบแต่ละ statement ด้วย semicolon จำเป็นสำหรับหลายๆ statement และเป็นนิสัยที่ดีแม้มีเพียง statement เดียว:

```sql
SELECT * FROM users;
SELECT name FROM users;
```

## กฎไวยากรณ์พื้นฐาน

1. Keyword ไม่สนใจตัวพิมพ์ใหญ่-เล็ก
2. ชื่อตารางและคอลัมน์แตกต่างกันไปตาม database (มักเป็นตัวพิมพ์เล็กและใช้ underscore)
3. ค่าข้อความใช้ single quotes: `'Alice'`
4. ตัวเลขไม่ต้องใส่ quotes: `42` หรือ `3.14`

## ฝึกฝน

ลอง query เหล่านี้:

```
-- Get all products
SELECT * FROM products;

-- Get product names and prices
SELECT name, price FROM products;

-- Get all orders
SELECT * FROM orders;
```

ในบทเรียนถัดไป เราจะเรียนรู้โครงสร้างของตาราง

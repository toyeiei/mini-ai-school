# การเรียงลำดับและจำกัดผลลัพธ์

โดยค่าเริ่มต้น ผลลัพธ์จาก database จะอยู่ในลำดับที่ database เก็บไว้ มักคุณต้องการให้อยู่ในลำดับที่เจาะจง

## เรียงลำดับด้วย ORDER BY

```sql
SELECT * FROM users ORDER BY name;
```

ผู้ใช้จะถูกเรียงตามลำดับอักษรตามชื่อ

## Ascending vs Descending

- **ASC** (ค่าเริ่มต้น) - จากน้อยไปมาก, A ถึง Z
- **DESC** - จากมากไปน้อย, Z ถึง A

```
-- Youngest users first
SELECT * FROM users ORDER BY age ASC;

-- Oldest users first
SELECT * FROM users ORDER BY age DESC;

-- Alphabetical by city (Z to A)
SELECT * FROM users ORDER BY city DESC;
```

## เรียงลำดับตามหลายคอลัมน์

เรียงตามคอลัมน์หนึ่ง แล้วคอลัมน์ที่สองถ้ามีค่าเท่ากัน:

```sql
SELECT * FROM users ORDER BY city ASC, name ASC;
```

นี่จะเรียงตามเมืองก่อน แล้วเรียงตามชื่อภายในแต่ละเมือง

ตัวอย่างผลลัพธ์:
```sql
+--------+-------------+-------+
| id     | name        | city  |
+--------+-------------+-------+
| 3      | Frank       | Boston|
| 1      | Alice       | Boston|
| 5      | Eve         | NYC   |
| 2      | Bob         | NYC   |
| 4      | Diana       | NYC   |
+--------+-------------+-------+
```

## การจำกัดผลลัพธ์

### LIMIT

ดึงเฉพาะจำนวนแถวที่ต้องการ:

```
-- Get the first 10 users
SELECT * FROM users LIMIT 10;

-- Get the top 5 oldest users
SELECT * FROM users ORDER BY age DESC LIMIT 5;
```

### OFFSET

ข้ามแถวบางส่วนก่อนคืนผลลัพธ์:

```
-- Get users 11-20 (second page of 10)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 10;
```

### ย่อ OFFSET

Database บางตัวรองรับ syntax นี้:

```
-- Get users 6-10
SELECT * FROM users LIMIT 5 OFFSET 5;
-- or
SELECT * FROM users LIMIT 5, 5;
```

## Pattern ที่ใช้บ่อย

### Top N ตามค่า

```
-- 3 most expensive products
SELECT * FROM products ORDER BY price DESC LIMIT 3;
```

### Bottom N ตามค่า

```
-- 3 cheapest products
SELECT * FROM products ORDER BY price ASC LIMIT 3;
```

### Pagination

```
-- Page 1
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 0;

-- Page 2
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;

-- Page 3
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;
```

## การเรียงลำดับ NULL

ค่า NULL มักถูกเรียงก่อนในลำดับน้อยไปมาก และหลังในลำดับมากไปน้อย:

```
-- Users with city first, then those without
SELECT * FROM users ORDER BY city ASC NULLS FIRST;
```

## รวมทุกอย่างเข้าด้วยกัน

Query เต็มพร้อมการเรียงลำดับและจำกัดผลลัพธ์:

```sql
SELECT name, email, price
FROM products
WHERE price > 50
ORDER BY price DESC
LIMIT 5;
```

นี่จะ:
1. กรองเฉพาะสินค้าที่ราคาเกิน $50
2. เรียงตามราคา (แพงสุดก่อน)
3. คืนเฉพาะ 5 อันดับแรก

## หมายเหตุด้านประสิทธิภาพ

การเรียงลำดับและจำกัดผลลัพธ์จะทำงานได้ดีที่สุดเมื่อ:
- มี index บนคอลัมน์ที่ใช้เรียง
- ผลลัพธ์ที่ได้มีขนาดเล็ก

การเรียงลำดับตารางขนาดใหญ่ที่ยังไม่ได้เรียงอาจช้า  เราจะเรียนรู้เรื่อง index ในภายหลัง

ตอนนี้คุณสามารถควบคุมได้แล้วว่าจะดึงข้อมูลอะไรและเรียงลำดับอย่างไร ต่อไป: การรวมข้อมูลจากหลายตาราง

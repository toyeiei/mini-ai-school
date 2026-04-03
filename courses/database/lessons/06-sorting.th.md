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

```sql
-- ผู้ใช้ที่อายุน้อยที่สุดก่อน
SELECT * FROM users ORDER BY age ASC;

-- ผู้ใช้ที่อายุมากที่สุดก่อน
SELECT * FROM users ORDER BY age DESC;

-- เรียงตามลำดับอักษรของเมือง (Z ถึง A)
SELECT * FROM users ORDER BY city DESC;
```

## เรียงลำดับตามหลายคอลัมน์

เรียงตามคอลัมน์หนึ่ง แล้วคอลัมน์ที่สองถ้ามีค่าเท่ากัน:

```sql
SELECT * FROM users ORDER BY city ASC, name ASC;
```

นี่จะเรียงตามเมืองก่อน แล้วเรียงตามชื่อภายในแต่ละเมือง

ตัวอย่างผลลัพธ์:
```
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

```sql
-- ดึงผู้ใช้ 10 คนแรก
SELECT * FROM users LIMIT 10;

-- ดึงผู้ใช้ 5 คนที่อายุมากที่สุด
SELECT * FROM users ORDER BY age DESC LIMIT 5;
```

### OFFSET

ข้ามแถวบางส่วนก่อนคืนผลลัพธ์:

```sql
-- ดึงผู้ใช้คนที่ 11-20 (หน้าที่ 2 จาก 10 คน)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 10;
```

### ย่อ OFFSET

Database บางตัวรองรับ syntax นี้:

```sql
-- ดึงผู้ใช้คนที่ 6-10
SELECT * FROM users LIMIT 5 OFFSET 5;
-- หรือ
SELECT * FROM users LIMIT 5, 5;
```

## Pattern ที่ใช้บ่อย

### Top N ตามค่า

```sql
-- สินค้า 3 อันดับที่แพงที่สุด
SELECT * FROM products ORDER BY price DESC LIMIT 3;
```

### Bottom N ตามค่า

```sql
-- สินค้า 3 อันดับที่ถูกที่สุด
SELECT * FROM products ORDER BY price ASC LIMIT 3;
```

### Pagination

```sql
-- หน้า 1
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 0;

-- หน้า 2
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;

-- หน้า 3
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;
```

## การเรียงลำดับ NULL

ค่า NULL มักถูกเรียงก่อนในลำดับน้อยไปมาก และหลังในลำดับมากไปน้อย:

```sql
-- ผู้ใช้ที่มีเมืองก่อน แล้วตามด้วยที่ไม่มี
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

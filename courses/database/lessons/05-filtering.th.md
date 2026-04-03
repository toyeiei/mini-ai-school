# การกรองข้อมูล

WHERE clause กรองแถวตามเงื่อนไข ช่วยให้คุณหาข้อมูลที่ต้องการได้อย่างแม่นยำ

## การกรองพื้นฐาน

```sql
SELECT * FROM users WHERE age > 25;
```

นี่จะคืนเฉพาะผู้ใช้ที่อายุเกิน 25

## Comparison Operators

| Operator | ความหมาย |
|----------|---------|
| = | เท่ากับ |
| <> or != | ไม่เท่ากับ |
| > | มากกว่า |
| < | น้อยกว่า |
| >= | มากกว่าหรือเท่ากับ |
| <= | น้อยกว่าหรือเท่ากับ |

### ตัวอย่าง

```sql
-- ผู้ใช้ที่อายุ 30 ปีพอดี
SELECT * FROM users WHERE age = 30;

-- ผู้ใช้ที่ไม่ได้อยู่ใน New York
SELECT * FROM users WHERE city <> 'New York';

-- ผู้ใช้ที่อายุ 18 ปีขึ้นไป
SELECT * FROM users WHERE age >= 18;

-- สินค้าที่ราคาต่ำกว่า $50
SELECT * FROM products WHERE price < 50;
```

## การกรองข้อความ

### ค้นหาตรงตัว

```sql
SELECT * FROM users WHERE city = 'Boston';
```

### ตัวพิมพ์ใหญ่-เล็ก

Database ส่วนใหญ่ไม่สนใจตัวพิมพ์ใหญ่-เล็กสำหรับการเปรียบเทียบข้อความ:

```sql
SELECT * FROM users WHERE city = 'boston';  -- ใช้ได้เช่นกัน
```

### การค้นหาด้วย Pattern (LIKE)

หาค่าที่ตรงกับ pattern:

```sql
-- ชื่อที่ขึ้นต้นด้วย 'A'
SELECT * FROM users WHERE name LIKE 'A%';

-- อีเมลที่ลงท้ายด้วย @gmail.com
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- ชื่อที่มี 'son' อยู่
SELECT * FROM users WHERE name LIKE '%son%';
```

### Wildcards

- `%` ตรงกับอักขระกี่ตัวก็ได้
- `_` ตรงกับอักขระเพียงหนึ่งตัว

```sql
-- 'A%' = ขึ้นต้นด้วย A
-- '%a' = ลงท้ายด้วย a
-- '%in%' = มี 'in' อยู่
-- '_all' = มี 4 ตัวอักษร ลงท้ายด้วย 'all'
```

## หลายเงื่อนไข

### AND

ทุกเงื่อนไขต้องเป็นจริงทั้งหมด:

```sql
SELECT * FROM users
WHERE age > 25 AND city = 'New York';
```

### OR

เงื่อนไขใดเงื่อนไขหนึ่งต้องเป็นจริง:

```sql
SELECT * FROM users
WHERE city = 'New York' OR city = 'Boston';
```

### การใช้ AND และ OR ร่วมกัน

ใช้วงเล็บเพื่อความชัดเจน:

```sql
SELECT * FROM products
WHERE (price > 100 AND stock > 10) OR category = 'Sale';
```

## การยกเว้นผลลัพธ์ (NOT)

```sql
-- ผู้ใช้ที่ไม่ได้อยู่ใน New York
SELECT * FROM users WHERE NOT city = 'New York';

-- สินค้าที่ไม่มีในสต็อก
SELECT * FROM products WHERE NOT stock > 0;
```

## การตรวจสอบ NULL

NULL หมายถึง "ไม่มีค่า" หรือ "ไม่ทราบ" ใช้ IS NULL หรือ IS NOT NULL:

```sql
-- ผู้ใช้ที่ไม่ได้ระบุเมือง
SELECT * FROM users WHERE city IS NULL;

-- ผู้ใช้ที่ระบุเมืองแล้ว
SELECT * FROM users WHERE city IS NOT NULL;
```

## IN Operator

ตรงกับค่าใดค่าหนึ่งในรายการ:

```sql
-- ผู้ใช้จากเมืองเหล่านี้
SELECT * FROM users
WHERE city IN ('New York', 'Boston', 'Chicago');

-- เท่ากับ:
SELECT * FROM users
WHERE city = 'New York'
   OR city = 'Boston'
   OR city = 'Chicago';
```

## BETWEEN Operator

ตรงกับช่วง (รวมค่าปลายทั้งสองด้าน):

```sql
-- ผู้ใช้ที่อายุ 25 ถึง 35 ปี
SELECT * FROM users WHERE age BETWEEN 25 AND 35;

-- เท่ากับ:
SELECT * FROM users WHERE age >= 25 AND age <= 35;
```

## ลำดับมีความสำคัญ

SQL ประเมิน WHERE clause ตามลำดับ เพื่อประสิทธิภาพ ให้วาง:
- เงื่อนไขที่จำกัดมากที่สุดไว้ก่อน
- เงื่อนไขที่กรองแถวได้มากที่สุดไว้ก่อน

การกรองข้อมูลเป็นสิ่งจำเป็นสำหรับการทำงานกับข้อมูลจริง ต่อไปเราจะเรียนรู้การเรียงลำดับและจำกัดผลลัพธ์

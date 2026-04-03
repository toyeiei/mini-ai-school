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

```
-- Users exactly 30 years old
SELECT * FROM users WHERE age = 30;

-- Users not in New York
SELECT * FROM users WHERE city <> 'New York';

-- Users 18 or older
SELECT * FROM users WHERE age >= 18;

-- Products under $50
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
SELECT * FROM users WHERE city = 'boston';  -- Also works
```

### การค้นหาด้วย Pattern (LIKE)

หาค่าที่ตรงกับ pattern:

```
-- Names starting with 'A'
SELECT * FROM users WHERE name LIKE 'A%';

-- Emails ending with @gmail.com
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Names containing 'son'
SELECT * FROM users WHERE name LIKE '%son%';
```

### Wildcards

- `%` ตรงกับอักขระกี่ตัวก็ได้
- `_` ตรงกับอักขระเพียงหนึ่งตัว

```
-- 'A%' = starts with A
-- '%a' = ends with a
-- '%in%' = contains 'in'
-- '_all' = exactly 4 chars ending with 'all'
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

```
-- Users not from New York
SELECT * FROM users WHERE NOT city = 'New York';

-- Users not in stock
SELECT * FROM products WHERE NOT stock > 0;
```

## การตรวจสอบ NULL

NULL หมายถึง "ไม่มีค่า" หรือ "ไม่ทราบ" ใช้ IS NULL หรือ IS NOT NULL:

```
-- Users with no city specified
SELECT * FROM users WHERE city IS NULL;

-- Users with a city specified
SELECT * FROM users WHERE city IS NOT NULL;
```

## IN Operator

ตรงกับค่าใดค่าหนึ่งในรายการ:

```
-- Users from these cities
SELECT * FROM users
WHERE city IN ('New York', 'Boston', 'Chicago');

-- Same as:
SELECT * FROM users
WHERE city = 'New York'
   OR city = 'Boston'
   OR city = 'Chicago';
```

## BETWEEN Operator

ตรงกับช่วง (รวมค่าปลายทั้งสองด้าน):

```
-- Users aged 25 to 35
SELECT * FROM users WHERE age BETWEEN 25 AND 35;

-- Same as:
SELECT * FROM users WHERE age >= 25 AND age <= 35;
```

## ลำดับมีความสำคัญ

SQL ประเมิน WHERE clause ตามลำดับ เพื่อประสิทธิภาพ ให้วาง:
- เงื่อนไขที่จำกัดมากที่สุดไว้ก่อน
- เงื่อนไขที่กรองแถวได้มากที่สุดไว้ก่อน

การกรองข้อมูลเป็นสิ่งจำเป็นสำหรับการทำงานกับข้อมูลจริง ต่อไปเราจะเรียนรู้การเรียงลำดับและจำกัดผลลัพธ์

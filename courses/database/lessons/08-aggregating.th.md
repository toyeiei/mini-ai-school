# Aggregation Functions

Aggregation functions ทำการคำนวณข้ามหลายแถวและคืนผลลัพธ์เดียว

## COUNT

นับจำนวนแถวหรือค่า

```sql
-- นับแถวทั้งหมด
SELECT COUNT(*) FROM users;

-- นับค่าที่ไม่ใช่ NULL ในคอลัมน์
SELECT COUNT(city) FROM users;

-- นับค่าที่ไม่ซ้ำกัน
SELECT COUNT(DISTINCT city) FROM users;
```

## SUM

หาผลรวมของค่าตัวเลข

```sql
-- ผลรวมของออเดอร์ทั้งหมด
SELECT SUM(amount) FROM orders;

-- ผลรวมของลูกค้าคนใดคนหนึ่ง
SELECT SUM(amount) FROM orders WHERE customer_id = 1;
```

## AVG

คำนวณค่าเฉลี่ย

```sql
-- อายุเฉลี่ยของผู้ใช้
SELECT AVG(age) FROM users;

-- ราคาเฉลี่ยของสินค้า
SELECT AVG(price) FROM products;

-- ค่าเฉลี่ยพร้อมทศนิยม
SELECT AVG(CAST(price AS REAL)) FROM products;
```

## MIN และ MAX

หาค่าน้อยที่สุดและมากที่สุด

```sql
-- ผู้ใช้ที่อายุน้อยที่สุดและมากที่สุด
SELECT MIN(age), MAX(age) FROM users;

-- สินค้าที่ถูกที่สุดและแพงที่สุด
SELECT MIN(price), MAX(price) FROM products;

-- วันที่สั่งซื้อล่าสุดและเก่าสุด
SELECT MIN(created_at), MAX(created_at) FROM orders;
```

## GROUP BY

รวมกลุ่มตามหมวดหมู่

```sql
-- นับผู้ใช้ต่อเมือง
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city;
```

ผลลัพธ์:
```
+-------------+------------+
| city        | user_count |
+-------------+------------+
| New York    | 5          |
| Boston      | 3          |
| Chicago     | 2          |
+-------------+------------+
```

### หลายคอลัมน์

จัดกลุ่มตามหลายคอลัมน์:

```sql
SELECT city, status, COUNT(*) as count
FROM orders
GROUP BY city, status;
```

## HAVING

กรองหลังจากจัดกลุ่มแล้ว (WHERE กรองก่อนจัดกลุ่ม)

```sql
-- เมืองที่มีผู้ใช้มากกว่า 2 คน
SELECT city, COUNT(*) as count
FROM users
GROUP BY city
HAVING COUNT(*) > 2;
```

### WHERE vs HAVING

```sql
-- WHERE: กรองแถวก่อนจัดกลุ่ม
SELECT city, COUNT(*) as count
FROM users
WHERE age > 25
GROUP BY city;

-- HAVING: กรองกลุ่มหลังจัดกลุ่ม
SELECT city, COUNT(*) as count
FROM users
GROUP BY city
HAVING COUNT(*) > 2;
```

## Pattern ที่ใช้บ่อย

### รายรวมทั้งหมด

```sql
SELECT SUM(amount) as total_revenue
FROM orders
WHERE status = 'completed';
```

### ค่าเฉลี่ยต่อออเดอร์

```sql
SELECT AVG(amount) as average_order
FROM orders
WHERE status = 'completed';
```

### จำนวนออเดอร์ต่อลูกค้า

```sql
SELECT customer_id, COUNT(*) as order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC;
```

### ผลรวมตามหมวดหมู่

```sql
SELECT category, SUM(stock * price) as total_value
FROM products
GROUP BY category;
```

## Aliases

ใช้ AS เพื่อตั้งชื่อคอลัมน์ที่คำนวณ:

```sql
SELECT
    city,
    COUNT(*) AS user_count,
    AVG(age) AS average_age
FROM users
GROUP BY city;
```

## พฤติกรรมของ NULL

- COUNT(*) นับแถวทั้งหมดรวม NULL
- COUNT(column) นับเฉพาะค่าที่ไม่ใช่ NULL
- SUM, AVG จะไม่นับค่า NULL
- ถ้าค่าทั้งหมดเป็น NULL, SUM จะคืน NULL (ไม่ใช่ 0)

## รวมทุกอย่างเข้าด้วยกัน

```sql
SELECT
    category,
    COUNT(*) as product_count,
    ROUND(AVG(price), 2) as avg_price,
    SUM(stock) as total_stock
FROM products
WHERE stock > 0
GROUP BY category
HAVING COUNT(*) >= 2
ORDER BY total_stock DESC;
```

นี่จะคืนหมวดหมู่ที่มีสินค้า 2 ชิ้นขึ้นไป เรียงตามจำนวนในสต็อกทั้งหมด

Aggregation เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึก ต่อไป: การออกแบบ database อย่างถูกต้อง

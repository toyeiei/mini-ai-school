# การรวมตาราง

ข้อมูลจริงมักถูกแบ่งเก็บในหลายตาราง Joins ช่วยให้คุณรวมข้อมูลจากตารางต่างๆ โดยอ้างอิงจากคอลัมน์ที่เกี่ยวข้องกัน

## ทำไมต้องใช้หลายตาราง?

ลองนึกภาพการเก็บข้อมูลออเดอร์:

```sql
-- ไม่ดี: ทั้งหมดในตารางเดียว ข้อมูลซ้ำซ้อนมาก
orders table
+--------+-------------+------------------+-------------+
| id     | customer    | product          | customer_city|
+--------+-------------+------------------+-------------+
| 1      | Alice       | Laptop           | New York   |
| 2      | Bob         | Mouse            | New York   |
| 3      | Alice       | Keyboard         | New York   |
+--------+-------------+------------------+-------------+

-- เมืองของ Alice ซ้ำในทุกออเดอร์!
```

การออกแบบที่ดีกว่า: แยกตาราง

```sql
customers table
+----+------------------+-------------+
| id | email            | city       |
+----+------------------+-------------+
| 1  | alice@email.com  | New York   |
| 2  | bob@email.com    | Boston     |
+----+------------------+-------------+

orders table
+----+-------------+----------+
| id | customer_id | product  |
+----+-------------+----------+
| 1  | 1           | Laptop   |
| 2  | 2           | Mouse    |
| 3  | 1           | Keyboard |
+----+-------------+----------+
```

## Primary Keys และ Foreign Keys

- **Primary Key (PK)** - ตัวระบุเฉพาะในแต่ละตาราง (`customers.id`)
- **Foreign Key (FK)** - อ้างอิงถึง primary key ในตารางอื่น (`orders.customer_id`)

## ประเภทของ JOIN

### INNER JOIN

คืนเฉพาะแถวที่ตรงกันในทั้งสองตาราง:

```sql
SELECT orders.id, customers.email, orders.product
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

ผลลัพธ์:
```
+----+------------------+----------+
| id | email            | product  |
+----+------------------+----------+
| 1  | alice@email.com  | Laptop   |
| 2  | bob@email.com    | Mouse    |
| 3  | alice@email.com  | Keyboard |
+----+------------------+----------+
```

### LEFT JOIN

คืนแถวทั้งหมดจากตารางซ้าย พร้อมแถวที่ตรงกันจากตารางขวา:

```sql
SELECT customers.email, orders.product
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
```

ผลลัพธ์:
```
+------------------+----------+
| email            | product  |
+------------------+----------+
| alice@email.com  | Laptop   |
| alice@email.com  | Keyboard |
| bob@email.com    | Mouse    |
+------------------+----------+
```

Alice และ Bob มีออเดอร์ทั้งคู่ จึงตรงกันทุกแถว

ถ้ามีคนที่ยังไม่มีออเดอร์ล่ะ?

### RIGHT JOIN

คืนแถวทั้งหมดจากตารางขวา:

```sql
SELECT customers.email, orders.product
FROM customers
RIGHT JOIN orders ON customers.id = orders.customer_id;
```

### FULL OUTER JOIN

คืนแถวทั้งหมดจากทั้งสองตาราง โดยใส่ NULL ที่ไม่มีข้อมูลตรงกัน:

```sql
SELECT customers.email, orders.product
FROM customers
FULL OUTER JOIN orders ON customers.id = orders.customer_id;
```

## Table Aliases

ย่อชื่อตารางด้วย alias:

```sql
SELECT c.email, o.product
FROM customers AS c
INNER JOIN orders AS o ON c.id = o.customer_id;
```

## การรวมหลายตาราง

สามตาราง: customers, orders, products

```sql
SELECT
    c.email,
    o.id AS order_id,
    p.name AS product_name,
    p.price
FROM customers c
INNER JOIN orders o ON c.id = o.customer_id
INNER JOIN products p ON o.product_id = p.id
WHERE c.email = 'alice@email.com';
```

## Self Joins

เชื่อมตารางกับตัวเอง:

```sql
-- หาผู้ใช้ที่อยู่เมืองเดียวกัน
SELECT a.name, b.name, a.city
FROM users a
INNER JOIN users b ON a.city = b.city
WHERE a.id < b.id;
```

## ข้อผิดพลาดที่พบบ่อย

### ชื่อคอลัมน์ที่กำกวม

ถ้าสองตารางมีคอลัมน์ชื่อเดียวกัน ให้ระบุตารางด้วย:

```sql
-- ผิดพลาด: id กำกวม
SELECT id, email FROM orders o INNER JOIN customers c ON o.customer_id = c.id;

-- แก้ไข: ระบุตาราง
SELECT o.id, c.email FROM orders o INNER JOIN customers c ON o.customer_id = c.id;
```

### ลืม JOIN Condition

ถ้าไม่มี ON clause คุณจะได้ Cartesian product (ทุกแถวจับคู่กับทุกแถว):

```sql
-- 3 ออเดอร์ x 2 ลูกค้า = 6 แถว (น่าจะไม่ใช่สิ่งที่คุณต้องการ!)
SELECT * FROM orders, customers;
```

Joins มีพลังมากแต่อาจซับซ้อน ให้ฝึกกับตารางเล็กๆ ก่อน

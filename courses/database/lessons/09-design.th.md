# การออกแบบ Database

การออกแบบ database ที่ดีช่วยป้องกันปัญหาข้อมูล การออกแบบที่ไม่ดีนำไปสู่ข้อมูลซ้ำซ้อน ข้อมูลไม่สอดคล้องกัน และข้อมูลเสียหาย

## ปัญหา: การออกแบบที่ไม่ดี

จินตนาการตารางเดียวสำหรับออเดอร์:

```sql
orders_bad
+-------------+------------------+---------------+------------------+-------------+
| order_id    | customer_name    | customer_email| product_name     | product_price|
+-------------+------------------+---------------+------------------+-------------+
| 1           | Alice Smith      | alice@...     | Laptop           | 999.99      |
| 2           | Alice Smith      | alice@...     | Mouse            | 29.99       |
| 3           | Bob Jones        | bob@...       | Keyboard         | 79.99       |
+-------------+------------------+---------------+------------------+-------------+
```

ปัญหา:
- ชื่อ/อีเมลของ Alice ซ้ำในทุกออเดอร์
- ถ้า Alice เปลี่ยนอีเมล ต้องอัปเดตหลายแถว
- "Keyboard" อาจสะกดต่างกันในอีกแถวหนึ่ง
- ราคาสินค้าอาจไม่ตรงกับราคาจริง

## Normalization

Normalization คือการจัดระเบียบข้อมูลให้เป็นตารางที่มีข้อมูลซ้ำซ้อนน้อยที่สุด

## First Normal Form (1NF)

แต่ละเซลล์มีค่าเดียว ไม่ใช่รายการหรือกลุ่มที่ซ้ำ

```sql
-- ไม่ดี: หลายค่าในหนึ่งเซลล์
orders_bad
+------+------------------+
| id   | products         |
+------+------------------+
| 1    | Laptop, Mouse    |
+------+------------------+

-- ดี: หนึ่งค่าต่อเซลล์ แยกเป็นแถวต่างหาก
orders_good
+------+-------------+
| id   | product     |
+------+-------------+
| 1    | Laptop      |
| 1    | Mouse       |
+------+-------------+
```

## Second Normal Form (2NF)

ทุกคอลัมน์ที่ไม่ใช่ key ต้องขึ้นกับ primary key ทั้งหมด

```sql
-- ไม่ดี: product_name ขึ้นกับ product_id ไม่ใช่ order_id
order_items_bad
+-------------+-------------+-------------+-------------+
| order_id    | product_id  | product_name| quantity    |
+-------------+-------------+-------------+-------------+
| 1           | 1           | Laptop      | 1           |
| 1           | 2           | Mouse       | 2           |
+-------------+-------------+-------------+-------------+
-- product_name ขึ้นกับ product_id (เพียงส่วนหนึ่งของ PK)

-- ดี: แยกตาราง
orders
+----+
| id |
+----+
| 1  |
+----+

products
+----+--------+
| id | name   |
+----+--------+
| 1  | Laptop |
| 2  | Mouse  |
+----+--------+

order_items
+-------------+-------------+-------------+
| order_id    | product_id  | quantity    |
+-------------+-------------+-------------+
| 1           | 1           | 1           |
| 1           | 2           | 2           |
+-------------+-------------+-------------+
```

## Third Normal Form (3NF)

คอลัมน์ที่ไม่ใช่ key ต้องขึ้นกับ primary key เท่านั้น ไม่ขึ้นกับคอลัมน์อื่นที่ไม่ใช่ key

```sql
-- ไม่ดี: discount ขึ้นกับ category ไม่ใช่ product โดยตรง
products_bad
+----+--------+-------------+------------+
| id | name   | category    | discount   |
+----+--------+-------------+------------+
| 1  | Laptop | Electronics | 10%        |
| 2  | Mouse  | Electronics | 10%        |
+----+--------+-------------+------------+
-- discount มาจาก category ไม่ใช่ product

-- ดี: normalize discount เข้าไปใน categories
products
+----+--------+-------------+
| id | name   | category_id |
+----+--------+-------------+
| 1  | Laptop | 1           |
| 2  | Mouse  | 1           |
+----+--------+-------------+

categories
+----+-------------+------------+
| id | name        | discount   |
+----+-------------+------------+
| 1  | Electronics | 10%        |
| 2  | Books       | 15%        |
+----+-------------+------------+
```

## Entity-Relationship (ER) Design

วางแผน database ก่อนเขียนโค้ด:

1. ระบุ **entities** (คำนาม: User, Product, Order)
2. ระบุ **relationships** (คำกริยา: User สั่ง Order, Order ประกอบด้วย Products)
3. ระบุ **attributes** (คุณสมบัติ: name, email, price)
4. เลือก **keys** (ตัวระบุเฉพาะ)

### ตัวอย่าง ER

```
users (1) ----< (many) orders (1) ----< (many) order_items >---- (1) products
```

หนึ่ง user มีหลาย orders หนึ่ง order มีหลาย items แต่ละ item อ้างอิงถึงหนึ่ง product

## กระบวนการออกแบบจริง

### ขั้นตอนที่ 1: คุณกำลังเก็บอะไร?

ออเดอร์สำหรับร้านค้าออนไลน์

### ขั้นตอนที่ 2: entities มีอะไรบ้าง?

Users, Products, Orders, Order Items

### ขั้นตอนที่ 3: attributes มีอะไรบ้าง?

- Users: id, name, email
- Products: id, name, price, stock
- Orders: id, user_id, date, status
- Order Items: id, order_id, product_id, quantity

### ขั้นตอนที่ 4: สร้างตาราง

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
);

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    status TEXT DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE order_items (
    id INTEGER PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER DEFAULT 1,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
```

## เมื่อไหร่ควร Denormalize

บางครั้งการเพิ่มข้อมูลซ้ำซ้อนช่วยเพิ่มประสิทธิภาพ:

- คำนวณผลรวมล่วงหน้า (denormalize `order_total`)
- Cache ข้อมูลที่ join บ่อย
- สร้าง read replicas สำหรับ query ที่หนัก

ให้ denormalize เฉพาะเมื่อคุณพบปัญหาด้านประสิทธิภาพจริงๆ เริ่มจากแบบ normalized เสมอ

การออกแบบที่ดีช่วยป้องกันปัญหา ต่อไป: แนวปฏิบัติที่ดีสำหรับการทำงานกับ database

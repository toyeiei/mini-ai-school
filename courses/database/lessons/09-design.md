# Database Design

Good database design prevents data problems. Bad design leads to duplicates, inconsistencies, and corrupted data.

## The Problem: Bad Design

Imagine a single table for orders:

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

Problems:
- Alice's name/email repeated for every order
- If Alice changes email, must update multiple rows
- "Keyboard" could be spelled differently in another row
- Product price might not match actual product price

## Normalization

Normalization organizes data into tables with minimal redundancy.

## First Normal Form (1NF)

Each cell contains a single value, not lists or repeat groups.

```sql
-- Bad: multiple values in one cell
orders_bad
+------+------------------+
| id   | products         |
+------+------------------+
| 1    | Laptop, Mouse    |
+------+------------------+

-- Good: one value per cell, separate rows
orders_good
+------+-------------+
| id   | product     |
+------+-------------+
| 1    | Laptop      |
| 1    | Mouse       |
+------+-------------+
```

## Second Normal Form (2NF)

Every non-key column depends on the entire primary key.

```sql
-- Bad: product_name depends on product_id, not order_id
order_items_bad
+-------------+-------------+-------------+-------------+
| order_id    | product_id  | product_name| quantity    |
+-------------+-------------+-------------+-------------+
| 1           | 1           | Laptop      | 1           |
| 1           | 2           | Mouse       | 2           |
+-------------+-------------+-------------+-------------+
-- product_name depends on product_id (only part of PK)

-- Good: separate tables
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

Non-key columns depend only on the primary key, not on other non-key columns.

```sql
-- Bad: discount depends on category, not product directly
products_bad
+----+--------+-------------+------------+
| id | name   | category    | discount   |
+----+--------+-------------+------------+
| 1  | Laptop | Electronics | 10%        |
| 2  | Mouse  | Electronics | 10%        |
+----+--------+-------------+------------+
-- discount is derived from category, not product

-- Good: normalize discount into categories
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

Plan your database before coding:

1. Identify **entities** (nouns: User, Product, Order)
2. Identify **relationships** (verbs: User places Order, Order contains Products)
3. Identify **attributes** (properties: name, email, price)
4. Choose **keys** (unique identifiers)

### Example ER

```
users (1) ----< (many) orders (1) ----< (many) order_items >---- (1) products
```

One user has many orders. One order has many items. Each item references one product.

## Practical Design Process

### Step 1: What are you storing?

Orders for an online store.

### Step 2: What entities?

Users, Products, Orders, Order Items

### Step 3: What attributes?

- Users: id, name, email
- Products: id, name, price, stock
- Orders: id, user_id, date, status
- Order Items: id, order_id, product_id, quantity

### Step 4: Create Tables

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

## When to Denormalize

Sometimes adding redundancy improves performance:

- Pre-calculate totals (denormalize `order_total`)
- Cache frequently joined data
- Create read replicas for heavy queries

Only denormalize when you have measured performance issues. Start normalized.

Good design prevents problems. Next: best practices for working with databases.

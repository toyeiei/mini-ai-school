# Combining Tables

Real data is spread across multiple tables. Joins let you combine data from different tables based on related columns.

## Why Multiple Tables?

Consider storing orders:

```sql
-- Bad: All in one table, lots of repeated data
orders table
+--------+-------------+------------------+-------------+
| id     | customer    | product          | customer_city|
+--------+-------------+------------------+-------------+
| 1      | Alice       | Laptop           | New York   |
| 2      | Bob         | Mouse            | New York   |
| 3      | Alice       | Keyboard         | New York   |
+--------+-------------+------------------+-------------+

-- Alice's city is repeated for every order!
```

Better design: separate tables

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

## Primary Keys and Foreign Keys

- **Primary Key (PK)** - Unique identifier in each table (`customers.id`)
- **Foreign Key (FK)** - References primary key in another table (`orders.customer_id`)

## JOIN Types

### INNER JOIN

Returns only rows with matches in both tables:

```sql
SELECT orders.id, customers.email, orders.product
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```

Result:
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

Returns all rows from the left table, plus matches from the right:

```sql
SELECT customers.email, orders.product
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
```

Result:
```
+------------------+----------+
| email            | product  |
+------------------+----------+
| alice@email.com  | Laptop   |
| alice@email.com  | Keyboard |
| bob@email.com    | Mouse    |
+------------------+----------+
```

Alice and Bob both have orders, so all rows match.

What if someone has no orders?

### RIGHT JOIN

Returns all rows from the right table:

```sql
SELECT customers.email, orders.product
FROM customers
RIGHT JOIN orders ON customers.id = orders.customer_id;
```

### FULL OUTER JOIN

Returns all rows from both tables, with NULL where no match:

```sql
SELECT customers.email, orders.product
FROM customers
FULL OUTER JOIN orders ON customers.id = orders.customer_id;
```

## Table Aliases

Shorten table names with aliases:

```sql
SELECT c.email, o.product
FROM customers AS c
INNER JOIN orders AS o ON c.id = o.customer_id;
```

## Joining Multiple Tables

Three tables: customers, orders, products

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

Join a table to itself:

```sql
-- Find users who share the same city
SELECT a.name, b.name, a.city
FROM users a
INNER JOIN users b ON a.city = b.city
WHERE a.id < b.id;
```

## Common Mistakes

### Ambiguous Column Names

If two tables have columns with the same name, qualify them:

```sql
-- Error: id is ambiguous
SELECT id, email FROM orders o INNER JOIN customers c ON o.customer_id = c.id;

-- Fixed: Specify table
SELECT o.id, c.email FROM orders o INNER JOIN customers c ON o.customer_id = c.id;
```

### Missing JOIN Condition

Without ON clause, you get a Cartesian product (every row matched with every row):

```sql
-- 3 orders x 2 customers = 6 rows (probably not what you want!)
SELECT * FROM orders, customers;
```

Joins are powerful but can be tricky. Practice with small tables first.

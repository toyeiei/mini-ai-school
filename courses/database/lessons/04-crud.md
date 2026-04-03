# CRUD Operations

CRUD stands for the four basic operations you perform on data:
- **C**reate - Insert new data
- **R**ead - Query existing data
- **U**pdate - Modify existing data
- **D**elete - Remove data

## Create (INSERT)

Add new rows to a table.

### Insert a Single Row

```sql
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@email.com', 28);
```

### Insert Multiple Rows

```sql
INSERT INTO users (name, email, age)
VALUES
    ('Bob', 'bob@email.com', 34),
    ('Charlie', 'charlie@email.com', 22),
    ('Diana', 'diana@email.com', 45);
```

### Insert with Default Values

If columns have defaults, you can omit them:

```sql
INSERT INTO users (name, email)
VALUES ('Eve', 'eve@email.com');
```

The `age` column will use its default value (or NULL if no default).

## Read (SELECT)

Retrieve data from tables. We covered SELECT in earlier lessons.

### Basic Select

```sql
SELECT * FROM users;
```

### Select Specific Columns

```sql
SELECT name, email FROM users;
```

## Update (UPDATE)

Modify existing rows.

### Update All Rows

```sql
UPDATE users SET age = 30;
```

Every user is now 30.

### Update Specific Rows

Use WHERE to target specific rows:

```sql
UPDATE users SET age = 29 WHERE name = 'Alice';
```

Only Alice's age changes.

### Update Multiple Columns

```sql
UPDATE users
SET age = 35, city = 'New York'
WHERE email = 'bob@email.com';
```

## Delete (DELETE)

Remove rows from a table.

### Delete All Rows

```sql
DELETE FROM users;
```

All users are deleted. Table structure remains.

### Delete Specific Rows

```sql
DELETE FROM users WHERE id = 3;
```

Only the user with id=3 is deleted.

### Safety First: Always Use WHERE

```sql
-- Dangerous! Deletes all users over 100 (probably all of them)
DELETE FROM users WHERE age > 100;
```

## Putting It Together

Full example:

```sql
-- Create table
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    stock INTEGER DEFAULT 0
);

-- Add products
INSERT INTO products (name, price, stock)
VALUES
    ('Laptop', 999.99, 10),
    ('Mouse', 29.99, 50),
    ('Keyboard', 79.99, 25);

-- Update stock
UPDATE products SET stock = 8 WHERE name = 'Laptop';

-- Check results
SELECT * FROM products;

-- Delete out-of-stock items
DELETE FROM products WHERE stock = 0;
```

## Remember

- **INSERT** adds new data
- **SELECT** reads data
- **UPDATE** changes existing data
- **DELETE** removes data
- Always use **WHERE** with UPDATE and DELETE unless you mean to affect all rows

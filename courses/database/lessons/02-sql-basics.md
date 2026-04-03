# SQL Basics

SQL (Structured Query Language) is the standard language for communicating with databases. It lets you create, read, update, and delete data.

## Your First Query

The most basic SQL query retrieves all data from a table:

```sql
SELECT * FROM users;
```

This says: "Select all columns from the users table."

## Breaking Down the Query

- **SELECT** - What data you want
- **\*** - All columns (or list specific columns)
- **FROM** - Which table
- **users** - The table name

## Selecting Specific Columns

Don't need all columns? List the ones you want:

```sql
SELECT name, email FROM users;
```

Result:
```
+------------------+---------+
| email            | name    |
+------------------+---------+
| alice@email.com  | Alice   |
| bob@email.com    | Bob     |
+------------------+---------+
```

## Writing Comments

Comments help you document your queries:

```sql
-- This query gets all users
SELECT * FROM users;

SELECT email FROM users; /* Get emails only */
```

## Case Sensitivity

SQL keywords are case-insensitive, but convention is uppercase:

```sql
-- All of these work:
SELECT * FROM users;
select * from users;
SeLeCt * FrOm users;
```

## Semicolons

End each statement with a semicolon. It's required for multiple statements and good practice even for single ones:

```sql
SELECT * FROM users;
SELECT name FROM users;
```

## Basic Syntax Rules

1. Keywords are case-insensitive
2. Table and column names vary by database (often lowercase with underscores)
3. String values use single quotes: `'Alice'`
4. Numbers are unquoted: `42` or `3.14`

## Practice

Try these variations:

```sql
-- Get all products
SELECT * FROM products;

-- Get product names and prices
SELECT name, price FROM products;

-- Get all orders
SELECT * FROM orders;
```

In the next lesson, we'll learn how tables are structured.

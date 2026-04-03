# Aggregation Functions

Aggregation functions perform calculations across multiple rows and return a single result.

## COUNT

Count rows or values.

```sql
-- Count all rows
SELECT COUNT(*) FROM users;

-- Count non-null values in a column
SELECT COUNT(city) FROM users;

-- Count distinct values
SELECT COUNT(DISTINCT city) FROM users;
```

## SUM

Add up numeric values.

```sql
-- Total of all orders
SELECT SUM(amount) FROM orders;

-- Total for a specific customer
SELECT SUM(amount) FROM orders WHERE customer_id = 1;
```

## AVG

Calculate averages.

```sql
-- Average user age
SELECT AVG(age) FROM users;

-- Average product price
SELECT AVG(price) FROM products;

-- Average with decimal precision
SELECT AVG(CAST(price AS REAL)) FROM products;
```

## MIN and MAX

Find smallest and largest values.

```sql
-- Youngest and oldest users
SELECT MIN(age), MAX(age) FROM users;

-- Cheapest and most expensive products
SELECT MIN(price), MAX(price) FROM products;

-- Earliest and latest order dates
SELECT MIN(created_at), MAX(created_at) FROM orders;
```

## GROUP BY

Aggregate by category.

```sql
-- Count users per city
SELECT city, COUNT(*) as user_count
FROM users
GROUP BY city;
```

Result:
```
+-------------+------------+
| city        | user_count |
+-------------+------------+
| New York    | 5          |
| Boston      | 3          |
| Chicago     | 2          |
+-------------+------------+
```

### Multiple Columns

Group by multiple columns:

```sql
SELECT city, status, COUNT(*) as count
FROM orders
GROUP BY city, status;
```

## HAVING

Filter after grouping (WHERE filters before).

```sql
-- Cities with more than 2 users
SELECT city, COUNT(*) as count
FROM users
GROUP BY city
HAVING COUNT(*) > 2;
```

### WHERE vs HAVING

```sql
-- WHERE: filters rows before grouping
SELECT city, COUNT(*) as count
FROM users
WHERE age > 25
GROUP BY city;

-- HAVING: filters groups after grouping
SELECT city, COUNT(*) as count
FROM users
GROUP BY city
HAVING COUNT(*) > 2;
```

## Common Patterns

### Total Revenue

```sql
SELECT SUM(amount) as total_revenue
FROM orders
WHERE status = 'completed';
```

### Average Order Value

```sql
SELECT AVG(amount) as average_order
FROM orders
WHERE status = 'completed';
```

### Orders per Customer

```sql
SELECT customer_id, COUNT(*) as order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC;
```

### Category Totals

```sql
SELECT category, SUM(stock * price) as total_value
FROM products
GROUP BY category;
```

## Aliases

Use AS to name calculated columns:

```sql
SELECT
    city,
    COUNT(*) AS user_count,
    AVG(age) AS average_age
FROM users
GROUP BY city;
```

## NULL Behavior

- COUNT(*) counts all rows including NULL
- COUNT(column) counts non-NULL values
- SUM, AVG ignore NULL values
- If all values are NULL, SUM returns NULL (not 0)

## Combining Everything

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

This returns categories with 2+ products, sorted by total stock.

Aggregation turns raw data into insights. Next: designing databases properly.

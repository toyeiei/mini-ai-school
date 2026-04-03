# Sorting and Limiting

By default, database results come in whatever order the database stored them. Usually, you want them in a specific order.

## Sorting with ORDER BY

```sql
SELECT * FROM users ORDER BY name;
```

Users are now sorted alphabetically by name.

## Ascending vs Descending

- **ASC** (default) - Smallest to largest, A to Z
- **DESC** - Largest to smallest, Z to A

```sql
-- Youngest users first
SELECT * FROM users ORDER BY age ASC;

-- Oldest users first
SELECT * FROM users ORDER BY age DESC;

-- Alphabetical by city (Z to A)
SELECT * FROM users ORDER BY city DESC;
```

## Sort by Multiple Columns

Sort by one column, then another when there's a tie:

```sql
SELECT * FROM users ORDER BY city ASC, name ASC;
```

This sorts by city first, then by name within each city.

Example result:
```
+--------+-------------+-------+
| id     | name        | city  |
+--------+-------------+-------+
| 3      | Frank       | Boston|
| 1      | Alice       | Boston|
| 5      | Eve         | NYC   |
| 2      | Bob         | NYC   |
| 4      | Diana       | NYC   |
+--------+-------------+-------+
```

## Limiting Results

### LIMIT

Get only a certain number of rows:

```sql
-- Get the first 10 users
SELECT * FROM users LIMIT 10;

-- Get the top 5 oldest users
SELECT * FROM users ORDER BY age DESC LIMIT 5;
```

### OFFSET

Skip some rows before returning results:

```sql
-- Get users 11-20 (second page of 10)
SELECT * FROM users ORDER BY name LIMIT 10 OFFSET 10;
```

### OFFSET Shorthand

Some databases support this syntax:

```sql
-- Get users 6-10
SELECT * FROM users LIMIT 5 OFFSET 5;
-- or
SELECT * FROM users LIMIT 5, 5;
```

## Common Patterns

### Top N by Value

```sql
-- 3 most expensive products
SELECT * FROM products ORDER BY price DESC LIMIT 3;
```

### Bottom N by Value

```sql
-- 3 cheapest products
SELECT * FROM products ORDER BY price ASC LIMIT 3;
```

### Pagination

```sql
-- Page 1
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 0;

-- Page 2
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 10;

-- Page 3
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20;
```

## NULL Sorting

NULL values typically sort first in ascending order, last in descending:

```sql
-- Users with city first, then those without
SELECT * FROM users ORDER BY city ASC NULLS FIRST;
```

## Combining Everything

Full query with sorting and limiting:

```sql
SELECT name, email, price
FROM products
WHERE price > 50
ORDER BY price DESC
LIMIT 5;
```

This:
1. Filters to products over $50
2. Sorts by price (highest first)
3. Returns only the top 5

## Performance Note

Sorting and limiting work best with:
- An index on the sorted column
- Small result sets

Sorting large unsorted tables can be slow. We'll cover indexes later.

Now you can control what data you retrieve and in what order. Next: combining data from multiple tables.

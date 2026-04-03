# Filtering Data

The WHERE clause filters rows based on conditions. It lets you find exactly what you need.

## Basic Filtering

```sql
SELECT * FROM users WHERE age > 25;
```

This returns only users older than 25.

## Comparison Operators

| Operator | Meaning |
|----------|---------|
| = | Equal to |
| <> or != | Not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

### Examples

```sql
-- Users exactly 30 years old
SELECT * FROM users WHERE age = 30;

-- Users not in New York
SELECT * FROM users WHERE city <> 'New York';

-- Users 18 or older
SELECT * FROM users WHERE age >= 18;

-- Products under $50
SELECT * FROM products WHERE price < 50;
```

## Text Filtering

### Exact Match

```sql
SELECT * FROM users WHERE city = 'Boston';
```

### Case Sensitivity

Most databases are case-insensitive for text comparisons:

```sql
SELECT * FROM users WHERE city = 'boston';  -- Also works
```

### Pattern Matching (LIKE)

Find values matching a pattern:

```sql
-- Names starting with 'A'
SELECT * FROM users WHERE name LIKE 'A%';

-- Emails ending with @gmail.com
SELECT * FROM users WHERE email LIKE '%@gmail.com';

-- Names containing 'son'
SELECT * FROM users WHERE name LIKE '%son%';
```

### Wildcards

- `%` matches any sequence of characters
- `_` matches exactly one character

```sql
-- 'A%' = starts with A
-- '%a' = ends with a
-- '%in%' = contains 'in'
-- '_all' = exactly 4 chars ending with 'all'
```

## Multiple Conditions

### AND

All conditions must be true:

```sql
SELECT * FROM users
WHERE age > 25 AND city = 'New York';
```

### OR

At least one condition must be true:

```sql
SELECT * FROM users
WHERE city = 'New York' OR city = 'Boston';
```

### Combining AND and OR

Use parentheses for clarity:

```sql
SELECT * FROM products
WHERE (price > 100 AND stock > 10) OR category = 'Sale';
```

## Excluding Results (NOT)

```sql
-- Users not from New York
SELECT * FROM users WHERE NOT city = 'New York';

-- Users not in stock
SELECT * FROM products WHERE NOT stock > 0;
```

## Checking for NULL

NULL means "no value" or "unknown." Use IS NULL or IS NOT NULL:

```sql
-- Users with no city specified
SELECT * FROM users WHERE city IS NULL;

-- Users with a city specified
SELECT * FROM users WHERE city IS NOT NULL;
```

## IN Operator

Match any value in a list:

```sql
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

Match a range (inclusive):

```sql
-- Users aged 25 to 35
SELECT * FROM users WHERE age BETWEEN 25 AND 35;

-- Same as:
SELECT * FROM users WHERE age >= 25 AND age <= 35;
```

## Order Matters

SQL evaluates WHERE clauses in order. For efficiency, put:
- Most restrictive conditions first
- Conditions that eliminate the most rows first

Filtering is essential for working with real data. Next, we'll learn to sort and limit results.

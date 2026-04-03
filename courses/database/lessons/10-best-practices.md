# Best Practices

Years of database experience distilled into practical rules.

## Design First

### Start Normalized

```sql
-- Good: Normalized tables
users (id, name, email)
orders (id, user_id, date)
order_items (id, order_id, product_id, quantity)
products (id, name, price)
```

### Denormalize Only When Needed

```sql
-- Only add redundant data if you have a proven performance issue
orders (id, user_id, date, total_amount)  -- total_amount cached
```

Premature denormalization creates maintenance nightmares.

## Writing Queries

### Be Explicit

```sql
-- Bad: SELECT *
SELECT * FROM users WHERE id = 1;

-- Good: Name the columns
SELECT id, name, email FROM users WHERE id = 1;
```

Explicit columns are:
- Faster (don't need to read metadata)
- Safer (won't break if table adds a blob column)
- Clearer (documents what you need)

### Use Meaningful Aliases

```sql
-- Bad
SELECT u.id, o.id FROM users u INNER JOIN orders o ON u.id = o.user_id;

-- Good
SELECT u.id AS user_id, o.id AS order_id
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
```

## Security

### Never Trust User Input

```sql
-- Bad: SQL injection vulnerable
"SELECT * FROM users WHERE name = '" + user_input + "'"

-- Good: Use parameterized queries
"SELECT * FROM users WHERE name = ?"
-- Parameter passed separately
```

### Protect Sensitive Data

- Never store passwords in plain text (hash them)
- Encrypt data at rest for sensitive fields
- Use HTTPS for all database connections

## Performance

### Index Wisely

```sql
-- Add index on columns you filter/sort often
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_orders_user_id ON orders(user_id);
```

But don't over-index:
- Indexes slow down inserts and updates
- One index per query usually sufficient
- `EXPLAIN` shows query plan

### Limit Results

```sql
-- Bad: Get all rows
SELECT * FROM logs;

-- Good: Paginate
SELECT * FROM logs ORDER BY created_at DESC LIMIT 100;
```

### Avoid SELECT * in Joins

```sql
-- Bad: Pulls unnecessary columns
SELECT * FROM orders o
INNER JOIN users u ON o.user_id = u.id;

-- Good: Only needed columns
SELECT o.id, o.created_at, u.email FROM orders o
INNER JOIN users u ON o.user_id = u.id;
```

## Maintenance

### Test Destructive Queries

```sql
-- Before deleting, select first
SELECT * FROM users WHERE city = 'Closed';

-- Then delete
DELETE FROM users WHERE city = 'Closed';
```

### Keep Backups

```sql
-- SQLite backup
sqlite3 database.db ".backup backup.db"

-- Export to SQL
sqlite3 database.db ".dump" > dump.sql
```

### Version Your Schema

Use migration files:

```sql
-- 001_create_users.sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
);

-- 002_add_city_to_users.sql
ALTER TABLE users ADD COLUMN city TEXT;
```

## Error Handling

### Check for Errors

```sql
-- After CREATE TABLE, verify
SELECT * FROM sqlite_master WHERE type='table' AND name='users';

-- After INSERT, check row count
SELECT changes();
```

### Use Transactions

```sql
BEGIN TRANSACTION;

-- Multiple related operations
INSERT INTO orders (user_id) VALUES (1);
UPDATE products SET stock = stock - 1 WHERE id = 1;

COMMIT;  -- Or ROLLBACK if error
```

If any step fails, the entire transaction is undone.

## Common Mistakes

1. **Forgetting WHERE** - Updates/deletes affect all rows
2. **Not using transactions** - Partial updates leave data inconsistent
3. **Ignoring NULLs** - NULL != NULL (use IS NULL)
4. **Storing dates as strings** - Use DATE type
5. **Using SELECT *** - Explicit columns are better
6. **Not indexing foreign keys** - Joins become slow

## Resources

- SQL databases vary: PostgreSQL, MySQL, SQLite each have quirks
- The SQL standard covers 90% of what's common
- Learn your database's specific features and limitations

You've completed Database 101. You can design, create, query, and maintain databases.

Keep practicing. Every database you work with teaches you something new.

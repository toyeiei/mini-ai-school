# Tables and Columns

Tables are the building blocks of relational databases. Each table stores data about one type of thing.

## Anatomy of a Table

```
users table
+--------+------------------+---------+----------+
| id (PK)| email            | name    | age      |
+--------+------------------+---------+----------+
| 1      | alice@email.com  | Alice   | 28       |
| 2      | bob@email.com    | Bob     | 34       |
+--------+------------------+---------+----------+
  └─ Primary Key
```

- **Rows** (records) - Individual entries (Alice, Bob)
- **Columns** (fields) - Attributes (email, name, age)

## Creating a Table

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER
);
```

## Data Types

Common SQL data types:

| Type | Description | Example |
|------|-------------|---------|
| INTEGER | Whole numbers | 1, 42, -7 |
| TEXT | String of text | "Alice" |
| REAL | Decimal numbers | 3.14, 99.9 |
| BLOB | Binary data | Images, files |
| DATE | Calendar date | 2024-01-15 |

## Constraints

Constraints enforce rules on data:

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,        -- Unique identifier
    email TEXT UNIQUE NOT NULL,    -- Must exist, can't duplicate
    name TEXT NOT NULL,            -- Must exist
    age INTEGER DEFAULT 0          -- Defaults to 0 if not specified
);
```

### Common Constraints

- **PRIMARY KEY** - Unique identifier for each row
- **NOT NULL** - Value is required
- **UNIQUE** - No duplicate values allowed
- **DEFAULT** - Value if none provided
- **CHECK** - Validate a condition

## Viewing Table Structure

See how a table is built:

```sql
.schema users
```

Output:
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    email TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER
);
```

## Modifying Tables

Add a new column:

```sql
ALTER TABLE users ADD COLUMN city TEXT;
```

The table now looks like:
```
+--------+------------------+---------+----------+-------+
| id     | email            | name    | age      | city  |
+--------+------------------+---------+----------+-------+
| 1      | alice@email.com  | Alice   | 28       | NULL  |
+--------+------------------+---------+----------+-------+
```

## Deleting Tables

Warning: This removes the table and all its data!

```sql
DROP TABLE users;
```

## Naming Conventions

- Table names: plural, lowercase, underscores (`users`, `order_items`)
- Column names: lowercase, descriptive (`created_at`, `user_id`)
- Primary keys: `id` or `table_name_id`
- Foreign keys: `other_table_id` (e.g., `user_id`)

Now you understand how tables work. Next, we'll learn to add data to them.

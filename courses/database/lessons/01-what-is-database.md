# What is a Database

A database is an organized collection of data stored electronically. It allows you to store, retrieve, and manage information efficiently.

## Why Databases Matter

Think about every app you use:
- **Social media** stores your posts, friends, and messages
- **Online stores** track products, orders, and customers
- **Banks** maintain account balances and transactions

All this data lives in databases.

## Types of Databases

### Relational Databases (SQL)

Data is organized into tables with rows and columns. Tables can be connected to each other.

Examples: MySQL, PostgreSQL, SQLite

```sql
-- A table called "users"
+----+------------------+---------+
| id | email            | name    |
+----+------------------+---------+
| 1  | alice@email.com  | Alice   |
| 2  | bob@email.com    | Bob     |
+----+------------------+---------+
```

### NoSQL Databases

Data is stored in flexible formats like JSON documents, key-value pairs, or graphs.

Examples: MongoDB, Redis, Cassandra

```json
{ "users": [
    { "id": 1, "email": "alice@email.com", "name": "Alice" },
    { "id": 2, "email": "bob@email.com", "name": "Bob" }
] }
```

## Database Management System (DBMS)

A DBMS is software that lets you interact with a database. It handles:
- Storing data
- Retrieving data
- Securing data
- Managing concurrent access

## SQL vs NoSQL

| Aspect | SQL | NoSQL |
|--------|-----|-------|
| Structure | Fixed tables | Flexible |
| Queries | Standard language | Varies by type |
| Scalability | Vertical | Horizontal |
| Best for | Related data | Rapid iteration |

## What You'll Learn

This course covers relational databases using SQL because:
- SQL is widely used and standardized
- Concepts transfer to most database systems
- It's excellent for learning data relationships

By the end, you'll understand how to design, create, and query databases.

## Key Terms

- **Table** - A collection of related data (like a spreadsheet)
- **Row** - A single record in a table
- **Column** - A specific field of data
- **Primary Key** - A unique identifier for each row
- **Foreign Key** - A link to another table

Let's dive in.

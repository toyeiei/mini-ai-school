# URLs & Endpoints

Endpoints are the URLs where APIs can be accessed.

## Anatomy of an API URL

```
https://api.example.com/users/123?sort=name&order=asc
\____/  \________/ \__/ \__/ \_______________/
  |        |       |    |         |
 scheme authority  path  ID    query params
```

## Common Endpoint Patterns

```bash
# Collection endpoints
GET    /users          # List all users
POST   /users          # Create user

# Single resource endpoints
GET    /users/123      # Get user 123
PUT    /users/123      # Replace user 123
PATCH  /users/123      # Update user 123
DELETE /users/123      # Delete user 123

# Nested resources
GET    /users/123/posts    # Posts by user 123
GET    /posts/456/comments # Comments on post 456
```

## Query Parameters

Filter, sort, and paginate:

```bash
# Filter
GET /users?country=thailand

# Sort
GET /users?sort=name&order=asc

# Paginate
GET /users?page=2&limit=10

# Combined
GET /users?country=thailand&sort=name&page=1
```

## Path vs Query Parameters

| Type | Example | Use for |
|------|---------|---------|
| Path | `/users/123` | Specific resource ID |
| Query | `/users?sort=name` | Filtering, sorting, pagination |

## Real Examples

```bash
# GitHub API
GET /repos/{owner}/{repo}
GET /users/{username}/repos

# Twitter API
GET /2/users/:id/tweets
GET /2/tweets/search/recent
```

## Summary

- Endpoints are URLs for API access
- Path parameters identify specific resources
- Query parameters filter and paginate
- Consistent naming makes APIs intuitive

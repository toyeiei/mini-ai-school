# How REST Works

REST (Representational State Transfer) is the most common API style.

## REST Principles

1. **Resources** - Everything is a resource (users, posts, products)
2. **URLs** - Resources have unique addresses
3. **HTTP Methods** - Use methods for actions
4. **Stateless** - Each request is independent

## REST URLs

```
https://api.example.com/users
https://api.example.com/users/123
https://api.example.com/posts/456/comments
```

Resources are nouns (users, posts), not verbs.

## HTTP in REST

| Method | Action | Example |
|--------|--------|---------|
| GET | Read | Get user data |
| POST | Create | Create new user |
| PUT | Update | Replace user data |
| PATCH | Modify | Update some fields |
| DELETE | Remove | Delete user |

## Request-Response Cycle

```
Client: GET /users/123
       ↓
Server: Processes request
       ↓
Server: Returns JSON response
       ↓
Client: Receives and uses data
```

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad request |
| 404 | Not found |
| 500 | Server error |

## Summary

- REST uses URLs for resources and HTTP methods for actions
- GET, POST, PUT, PATCH, DELETE
- Server responds with data (usually JSON)
- Status codes indicate success or failure

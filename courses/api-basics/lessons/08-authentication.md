# Authentication

APIs need to know who you are. Authentication verifies identity.

## Why Authentication?

- Protect user data
- Prevent unauthorized access
- Rate limiting per user
- Track user actions

## API Keys

Simple but less secure:

```javascript
// Send key in header
const response = await fetch('/api/data', {
    headers: {
        'X-API-Key': 'your-api-key-here'
    }
});
```

## Bearer Tokens (JWT)

Most common modern approach:

```javascript
const response = await fetch('/api/users', {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIs...'
    }
});
```

## Login Flow

```javascript
// 1. Send credentials
const loginResponse = await fetch('/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'user@example.com',
        password: 'password123'
    })
});

const { token } = await loginResponse.json();

// 2. Store token
localStorage.setItem('token', token);

// 3. Use token for subsequent requests
const response = await fetch('/api/profile', {
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
```

## Security Best Practices

- Never expose secrets in frontend code
- Use HTTPS always
- Store tokens securely
- Implement logout (clear token)
- Set token expiration

## When to Authenticate

| Endpoint | Auth Required? |
|----------|----------------|
| `/api/public/news` | No |
| `/api/users/profile` | Yes |
| `/api/posts` | Yes |
| `/api/admin/*` | Admin only |

## Summary

- API keys for simple authentication
- Bearer tokens (JWT) for user sessions
- Always send auth in headers
- Never expose secrets publicly

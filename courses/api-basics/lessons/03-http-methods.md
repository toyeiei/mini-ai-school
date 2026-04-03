# HTTP Methods

HTTP methods tell the API what action to perform.

## GET - Read Data

```javascript
// Get all users
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => console.log(data));

// Get single user
fetch('https://api.example.com/users/1')
    .then(response => response.json())
    .then(user => console.log(user));
```

GET requests have no body. Data goes in the URL.

## POST - Create Data

```javascript
fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice',
        email: 'alice@example.com'
    })
})
    .then(response => response.json())
    .then(user => console.log('Created:', user));
```

## PUT - Replace Data

```javascript
// Replace entire user
fetch('https://api.example.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Alice Updated',
        email: 'new@example.com'
    })
});
```

## PATCH - Modify Data

```javascript
// Update just the email
fetch('https://api.example.com/users/1', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'updated@example.com'
    })
});
```

## DELETE - Remove Data

```javascript
fetch('https://api.example.com/users/1', {
    method: 'DELETE'
});
```

## Summary

- **GET** - Read (no body)
- **POST** - Create new
- **PUT** - Replace entire
- **PATCH** - Replace partial
- **DELETE** - Remove

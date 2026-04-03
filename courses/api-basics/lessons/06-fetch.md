# JavaScript fetch

The `fetch` API makes HTTP requests from JavaScript.

## Basic GET Request

```javascript
fetch('https://api.example.com/users/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Async/Await Syntax

Modern JavaScript uses async/await:

```javascript
async function getUser() {
    try {
        const response = await fetch('https://api.example.com/users/1');

        if (!response.ok) {
            throw new Error('User not found');
        }

        const user = await response.json();
        console.log(user);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUser();
```

## POST Request with fetch

```javascript
async function createUser() {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Alice',
            email: 'alice@example.com'
        })
    });

    const newUser = await response.json();
    console.log('Created:', newUser);
}
```

## Common Patterns

```javascript
// Set authorization header
headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
}

// Handle different status codes
if (response.status === 404) {
    // Handle not found
} else if (response.status === 401) {
    // Handle unauthorized
}
```

## Summary

- `fetch()` returns a Promise
- Use `response.json()` to parse JSON
- Use `await` for cleaner async code
- Always handle errors with try/catch

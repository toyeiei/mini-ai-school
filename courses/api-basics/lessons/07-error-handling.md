# Error Handling

APIs can fail. Handle errors gracefully.

## Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| 400 | Bad request | Fix request data |
| 401 | Unauthorized | Add authentication |
| 403 | Forbidden | Check permissions |
| 404 | Not found | Verify URL |
| 500 | Server error | Retry later |

## Check Response Status

```javascript
async function getUser(id) {
    const response = await fetch(`/api/users/${id}`);

    if (response.status === 404) {
        return { error: 'User not found' };
    }

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
```

## Structured Error Responses

Good APIs return errors in a consistent format:

```json
{
    "error": {
        "code": "USER_NOT_FOUND",
        "message": "User with ID 123 does not exist"
    }
}
```

## Graceful Error Handling

```javascript
async function fetchData() {
    try {
        const response = await fetch('/api/data');

        if (!response.ok) {
            const error = await response.json();
            showError(error.message);
            return null;
        }

        return await response.json();
    } catch (networkError) {
        showError('Network error. Check your connection.');
        return null;
    }
}

function showError(message) {
    document.getElementById('error').textContent = message;
}
```

## User-Friendly Messages

```javascript
const errorMessages = {
    400: 'Please check your input and try again.',
    401: 'Please log in to continue.',
    403: 'You do not have permission.',
    404: 'The requested resource was not found.',
    500: 'Something went wrong. Please try later.'
};

function getMessage(status) {
    return errorMessages[status] || 'An unexpected error occurred.';
}
```

## Summary

- Always check `response.ok`
- Return user-friendly error messages
- Handle network errors separately
- Log errors for debugging

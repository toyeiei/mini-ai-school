# Asynchronous Programming

Asynchronous code allows multiple operations to run without waiting for each other. This is essential for tasks like fetching data from APIs.

## The Problem

Some operations take time:

```javascript
// This doesn't wait!
console.log('Start');
fetchData();  // Takes 2 seconds
console.log('End');  // Runs immediately, before fetchData completes
```

## Callbacks

Pass a function to run when an operation completes:

```javascript
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);
```

## Promises

Promises represent a value that will be available in the future:

```javascript
let promise = new Promise((resolve, reject) => {
    // Do something async
    let success = true;
    if (success) {
        resolve('Done!');
    } else {
        reject('Error!');
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

## Async/Await

A cleaner way to work with promises:

```javascript
async function fetchUser() {
    try {
        let response = await fetch('/api/user');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
}
```

## Fetch API

Make HTTP requests:

```javascript
// GET request
fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
    .catch(error => console.log(error));

// With async/await
async function getUsers() {
    let response = await fetch('https://api.example.com/users');
    let users = await response.json();
    return users;
}
```

## Promise.all

Run multiple promises in parallel:

```javascript
let promise1 = fetch('/api/user1');
let promise2 = fetch('/api/user2');
let promise3 = fetch('/api/user3');

Promise.all([promise1, promise2, promise3])
    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(data => console.log(data));
```

## Common Patterns

```javascript
// Sequential (slower)
let user = await fetchUser();
let posts = await fetchPosts();

// Parallel (faster)
let [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
]);
```

## Error Handling

Always handle errors in async code:

```javascript
async function safeFetch(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('HTTP error');
        return await response.json();
    } catch (error) {
        console.log('Fetch failed:', error.message);
        return null;
    }
}
```

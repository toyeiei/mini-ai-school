# Real World APIs

Let's see real APIs in action.

## Public APIs

Many APIs are free to try:

| API | Use | URL |
|-----|-----|-----|
| JSONPlaceholder | Testing | jsonplaceholder.typicode.com |
| Dog API | Random dogs | dog.ceo/api |
| Weather | Weather data | open-meteo.com |
| GitHub | GitHub data | api.github.com |

## Try JSONPlaceholder

```javascript
// Get all posts
async function getPosts() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
    const posts = await response.json();
    console.log(posts);
}

// Get post with comments
async function getPostWithComments(postId) {
    const [post, comments] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    ]);

    return {
        post: await post.json(),
        comments: await comments.json()
    };
}
```

## Weather API Example

```javascript
async function getWeather(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.open-meteo.com/v1/forecast?city=${city}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
        temp: data.current.temperature_2m,
        weather: data.current.weather_code
    };
}
```

## Real API Documentation

Good docs include:
- Endpoint list
- Request/response examples
- Authentication requirements
- Rate limits
- Error codes

## Rate Limiting

APIs limit how many requests you can make:

```javascript
// Check rate limit headers
console.log(response.headers.get('X-RateLimit-Remaining'));

// Handle rate limit
if (response.status === 429) {
    console.log('Slow down! Too many requests.');
}
```

## Summary

- JSONPlaceholder great for testing
- Real APIs need keys and have limits
- Always read the documentation
- Respect rate limits

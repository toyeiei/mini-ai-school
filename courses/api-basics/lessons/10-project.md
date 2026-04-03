# Build an App

Let's build a simple app that fetches and displays data.

## Project: Random Cat Facts

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cat Facts</title>
    <style>
        body { font-family: sans-serif; max-width: 600px; margin: 2rem auto; padding: 1rem; }
        .fact { background: #f0f0f0; padding: 1rem; margin: 1rem 0; border-radius: 8px; }
        button { padding: 0.75rem 1.5rem; background: #6c5ce7; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #5a4bd1; }
    </style>
</head>
<body>
    <h1>Random Cat Facts</h1>
    <div id="fact" class="fact">Click the button to see a cat fact!</div>
    <button onclick="getCatFact()">New Fact</button>

    <script>
        async function getCatFact() {
            const factDiv = document.getElementById('fact');
            factDiv.textContent = 'Loading...';

            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (!response.ok) throw new Error('Failed to fetch');

                const data = await response.json();
                factDiv.textContent = data.fact;
            } catch (error) {
                factDiv.textContent = 'Error loading fact. Try again!';
            }
        }
    </script>
</body>
</html>
```

## How It Works

1. Button click calls `getCatFact()`
2. Fetch requests data from API
3. Response converted to JSON
4. Display fact in HTML

## Try It Yourself

1. Save the HTML above
2. Open in browser
3. Click the button!

## Add Error Handling

```javascript
async function getCatFact() {
    const factDiv = document.getElementById('fact');
    factDiv.textContent = 'Loading...';

    try {
        const response = await fetch('https://catfact.ninja/fact');

        if (response.status === 429) {
            throw new Error('Too many requests. Wait a moment.');
        }

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        factDiv.textContent = data.fact;

    } catch (error) {
        factDiv.textContent = error.message;
    }
}
```

## What You Learned

- Fetch data from public APIs
- Display API response in HTML
- Handle loading states
- Handle errors gracefully

Congratulations! You built a real API-powered app!

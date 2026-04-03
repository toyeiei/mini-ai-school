# Build a Page

Let's put it all together and build a simple profile page.

## The Plan

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>My Profile</h1>
    </header>

    <main>
        <section class="profile">
            <img src="avatar.jpg" alt="My photo" class="avatar">
            <h2>John Doe</h2>
            <p>Web Developer</p>
        </section>

        <section class="about">
            <h3>About Me</h3>
            <p>I love building websites and learning new technologies.</p>
        </section>

        <section class="skills">
            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>

        <section class="contact">
            <h3>Contact</h3>
            <p>Email: john@example.com</p>
        </section>
    </main>
</body>
</html>
```

## The CSS

```css
body {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background: #f5f5f5;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

.avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
}

.profile {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 8px;
}

section {
    background: white;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
}

ul {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
}

li {
    background: #e0e0e0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
}
```

## Try It

1. Create `index.html` and `style.css`
2. Add an image called `avatar.jpg`
3. Open in browser
4. Modify and experiment!

## What You Learned

- HTML structure with semantic elements
- CSS styling and layout
- Flexbox for alignment
- Box model for spacing

Congratulations! You built a real webpage!

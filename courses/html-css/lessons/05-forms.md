# Forms

Forms collect user input. Every login, search, and signup uses them.

## Basic Form

```html
<form action="/submit" method="POST">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <button type="submit">Submit</button>
</form>
```

## Input Types

```html
<input type="text">       <!-- Text -->
<input type="email">      <!-- Email -->
<input type="password">    <!-- Hidden text -->
<input type="number">     <!-- Numbers -->
<input type="date">       <!-- Date picker -->
<input type="checkbox">   <!-- Yes/No -->
<input type="radio">      <!-- Choose one -->
```

## Text Areas & Select

```html
<textarea rows="4" cols="50">
Enter your message here...
</textarea>

<select name="country">
    <option value="th">Thailand</option>
    <option value="us">United States</option>
</select>
```

## Form Attributes

| Attribute | Purpose |
|-----------|---------|
| `action` | URL to send data |
| `method` | GET (view) or POST (submit) |
| `name` | Field identifier |
| `required` | Must fill out |

## Summary

- `<form>` collects user input
- `<input>` various field types
- Labels improve accessibility
- `name` attribute identifies the data

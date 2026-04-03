# Layout

CSS layout controls where elements appear on the page.

## Flexbox

```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

## Flex Properties

```css
.flex-container {
    display: flex;
    flex-direction: row;      /* or column */
    gap: 20px;                /* Space between items */
    justify-content: center;  /* Main axis */
    align-items: center;      /* Cross axis */
}
```

## Flex Item Control

```css
.item {
    flex-grow: 1;   /* Grow to fill space */
    flex-shrink: 0; /* Don't shrink */
    flex-basis: 200px; /* Initial size */
}
```

## Centering Made Easy

```css
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
```

## Common Patterns

### Navigation Bar

```css
nav {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
}
```

### Card Grid

```css
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.card {
    flex: 1 1 300px; /* Grow, shrink, basis */
}
```

## Summary

- `display: flex` creates flex container
- `justify-content` moves items horizontally
- `align-items` moves items vertically
- `gap` adds space between items

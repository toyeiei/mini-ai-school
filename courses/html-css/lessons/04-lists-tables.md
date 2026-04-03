# Lists & Tables

Lists organize information. Tables display structured data.

## Unordered Lists

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```

## Ordered Lists

```html
<ol>
    <li>Mix flour and eggs</li>
    <li>Add sugar</li>
    <li>Bake for 30 minutes</li>
</ol>
```

## Tables

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
        </tr>
    </tbody>
</table>
```

Parts:
- `<table>` - Container
- `<thead>` - Header row
- `<tbody>` - Data rows
- `<tr>` - Table row
- `<th>` - Header cell
- `<td>` - Data cell

## When to Use Tables

Use tables for **tabular data** (schedules, prices, comparisons).

Don't use tables for page layout.

## Summary

- `<ul>` for bullet lists, `<ol>` for numbered
- Tables have headers, rows, and cells
- Use tables for data, not layout

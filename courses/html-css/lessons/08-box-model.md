# Box Model

Every HTML element is a box. The box model controls sizing and spacing.

## The Four Parts

```
┌─────────────────────────────┐
│          MARGIN              │  <- Space outside
├─────────────────────────────┤
│          BORDER             │
├─────────────────────────────┤
│         PADDING             │  <- Space inside
├─────────────────────────────┤
│                             │
│          CONTENT            │  <- Text, images
│                             │
└─────────────────────────────┘
```

## CSS Properties

```css
.box {
    /* Content size */
    width: 200px;
    height: 100px;

    /* Inside spacing */
    padding: 20px;

    /* Border */
    border: 1px solid black;

    /* Outside spacing */
    margin: 10px;
}
```

## Shorthand

```css
/* All sides */
padding: 20px;

/* Top/bottom left/right */
padding: 10px 20px;

/* Top right bottom left */
padding: 10px 20px 10px 20px;
```

## Box Sizing

```css
* {
    box-sizing: border-box;
}
```

`border-box` makes `width` include padding and border. Much easier!

## Display Property

```css
.block { display: block; }    /* Full width */
.inline { display: inline; }  /* Same line */
.inline-block { display: inline-block; } /* Hybrid */
```

## Summary

- Margin: outside space
- Border: edge of box
- Padding: inside space
- Content: the actual element
- Use `box-sizing: border-box` for sanity

# Links & Images

Links connect pages together. Images add visual content.

## Links (Anchor Tags)

```html
<!-- Link to another page -->
<a href="about.html">About Us</a>

<!-- Link to external site -->
<a href="https://google.com">Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">Google</a>
```

## Images

```html
<img src="photo.jpg" alt="Description of photo">
```

Attributes:
- `src` - Image file path or URL
- `alt` - Description for accessibility

## Image Formats

| Format | Use Case |
|--------|----------|
| JPEG | Photos (smaller file) |
| PNG | Graphics, transparency |
| SVG | Icons, logos (scalable) |
| GIF | Simple animations |

## Folder Structure

```
my-site/
├── index.html
├── about.html
└── images/
    └── photo.jpg
```

```html
<a href="about.html">About</a>
<img src="images/photo.jpg" alt="Photo">
```

## Alt Text

Always write descriptive alt text:

```html
<!-- Good -->
<img src="cat.jpg" alt="Orange cat sleeping on a couch">

<!-- Bad -->
<img src="cat.jpg" alt="cat">
```

## Summary

- `<a>` creates links, `href` specifies destination
- `<img>` displays images, always include `alt`
- Use relative paths for local files
- Alt text helps accessibility

# Modules

Modules let you organize code into separate files and share functionality between them.

## Why Modules?

- Organize code into logical units
- Reuse code across multiple files
- Hide implementation details
- Manage dependencies

## Exporting

Export functions, objects, or variables from a module:

```javascript
// math.js

// Named export
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}
```

## Importing

Use exports in other files:

```javascript
// app.js

// Import named export
import { add, PI } from './math.js';

// Import default export
import multiply from './math.js';

// Import everything
import * as math from './math.js';

console.log(math.add(1, 2));
console.log(math.PI);
```

## CommonJS (Node.js)

Node.js uses a different module syntax:

```javascript
// Exporting
module.exports = { add, multiply };

// Importing
const { add } = require('./math.js');
```

## ES Modules in Browser

In HTML, tell the browser you're using modules:

```javascript
<script type="module" src="app.js"></script>
```

## Module Patterns

```javascript
// Re-export from another file
export { add } from './math.js';

// Rename exports
export { add as sum };

// Rename imports
import { add as sum } from './math.js';
```

## Best Practices

- One module per file
- Clear, descriptive module names
- Group related functionality together
- Keep modules focused (single responsibility)
- Use barrel files to simplify imports

## Example Structure

```
src/
├── utils/
│   ├── format.js      // formatting utilities
│   ├── validate.js    // validation functions
│   └── index.js       // re-exports everything
├── app.js             // main application
```

```javascript
// utils/index.js
export { formatDate } from './format.js';
export { validateEmail } from './validate.js';
```

```javascript
// app.js
import { formatDate, validateEmail } from './utils/index.js';
```

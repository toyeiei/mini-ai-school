# Design Patterns

Design patterns are reusable solutions to common software design problems. They provide tested templates you can adapt to your needs.

## Creational Patterns

### Factory Pattern

Create objects without specifying the exact class.

```javascript
class Dog {
    speak() { return 'Woof'; }
}

class Cat {
    speak() { return 'Meow'; }
}

function createAnimal(type) {
    if (type === 'dog') return new Dog();
    if (type === 'cat') return new Cat();
    throw new Error('Unknown animal');
}
```

### Singleton Pattern

Ensure only one instance exists.

```javascript
class Config {
    constructor() {
        if (Config.instance) return Config.instance;
        this.settings = { theme: 'dark' };
        Config.instance = this;
    }
}
```

## Structural Patterns

### Module Pattern

Encapsulate code and expose a public API.

```javascript
const Counter = (function() {
    let count = 0;

    return {
        increment() { count++; },
        decrement() { count--; },
        getCount() { return count; }
    };
})();

Counter.increment();
Counter.increment();
Counter.getCount(); // 2
```

### Adapter Pattern

Make incompatible interfaces work together.

```javascript
// Old API
function oldApiCall(callback) {
    callback('data');
}

// New interface using adapter
function newApiCall() {
    return new Promise(resolve => oldApiCall(resolve));
}
```

## Behavioral Patterns

### Observer Pattern

Notify multiple objects when state changes.

```javascript
class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    notify(data) {
        this.observers.forEach(fn => fn(data));
    }
}
```

### Strategy Pattern

Select an algorithm at runtime.

```javascript
const strategies = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
};

function sort(arr, strategy) {
    return arr.slice().sort(strategies[strategy]);
}
```

## When to Use Patterns

- **Don't force patterns** - Use them when they fit naturally
- **Simple code is better** - Patterns add complexity
- **Patterns are starting points** - Adapt them to your situation
- **Know the trade-offs** - Patterns solve one problem but may create others

## Common Mistakes

1. Over-engineering with too many layers
2. Using patterns where simple code works
3. Implementing patterns incorrectly
4. Not considering maintenance costs

Patterns are tools, not rules. Use them wisely.

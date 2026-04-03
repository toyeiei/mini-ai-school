# Design Patterns

Design patterns คือโซลูชันที่นำมาใช้ซ้ำได้สำหรับปัญหาการออกแบบซอฟต์แวร์ที่พบบ่อย พวกมันให้ template ที่ผ่านการทดสอบแล้วซึ่งคุณปรับให้เข้ากับความต้องการของคุณได้

## Creational Patterns

### Factory Pattern

สร้าง object โดยไม่ต้องระบุ class ที่แน่นอน

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

มั่นใจว่ามี instance เดียวเท่านั้น

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

ห่อหุ้มโค้ดและเปิดเผย public API

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

ทำให้ interface ที่ไม่เข้ากันทำงานร่วมกันได้

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

แจ้งเตือนหลาย object เมื่อ state เปลี่ยนแปลง

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

เลือก algorithm ขณะ runtime

```javascript
const strategies = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
};

function sort(arr, strategy) {
    return arr.slice().sort(strategies[strategy]);
}
```

## เมื่อไหร่ควรใช้ Patterns

- **อย่าบังคับใช้ patterns** - ใช้เมื่อเหมาะสมตามธรรมชาติ
- **โค้ดที่เรียบง่ายดีกว่า** - Patterns เพิ่มความซับซ้อน
- **Patterns เป็นจุดเริ่มต้น** - ปรับให้เข้ากับสถานการณ์ของคุณ
- **รู้ trade-offs** - Patterns แก้ปัญหาหนึ่งแต่อาจสร้างปัญหาอื่น

## ข้อผิดพลาดที่พบบ่อย

1. Over-engineering ด้วยชั้นของโค้ดมากเกินไป
2. ใช้ patterns ที่โค้ดเรียบง่ายทำได้
3.  implement patterns ผิดวิธี
4. ไม่คำนึงถึงต้นทุนการดูแลรักษา

Patterns คือเครื่องมือ ไม่ใช่กฎเกณฑ์ ใช้อย่างมีสติ

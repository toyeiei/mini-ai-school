# Data Structures

Data structures จัดระเบียบข้อมูลเพื่อให้เข้าถึงและแก้ไขได้มีประสิทธิภาพ การเลือกใช้ที่เหมาะสมเป็นกุญแจสำคัญในการเขียนซอฟต์แวร์ที่ดี

## Arrays

หน่วยความจำต่อเนื่องกัน เข้าถึงตาม index ได้เร็ว แต่การเพิ่ม/ลบช้า

```javascript
const arr = [1, 2, 3, 4, 5];
arr[2];        // O(1) - เข้าถึงเร็ว
arr.push(6);   // O(1) - เพิ่มท้าย (เฉลี่ย)
arr.unshift(0); // O(n) - เพิ่มหน้าช้า
```

## Linked Lists

แต่ละ element ชี้ไปยัง element ถัดไป เพิ่ม/ลบเร็ว แต่เข้าถึงช้า

```javascript
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        const node = new ListNode(val);
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = node;
    }
}
```

## Hash Maps

คู่ key-value ค้นหาได้เร็ว

```javascript
const map = new Map();
map.set('name', 'Alice');
map.get('name');      // 'Alice'
map.has('name');      // true
map.delete('name');   // true
```

## Stacks

LIFO (Last In, First Out) เข้าทีหลัง ออกทีหลัง

```javascript
const stack = [];
stack.push(1);    // push
stack.push(2);
stack.pop();      // 2
stack.pop();       // 1
```

## Queues

FIFO (First In, First Out) เข้าทีแรก ออกทีแรก

```javascript
const queue = [];
queue.push(1);    // enqueue
queue.push(2);
queue.shift();     // 1
```

## Trees

โครงสร้างแบบลำดับชั้น มีความสัมพันธ์แบบ parent-child

```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}
```

Binary trees มี children ได้สูงสุดสองตัวต่อหนึ่ง node

## การเลือก Data Structure

| ความต้องการ | ตัวเลือกที่เหมาะสม |
|---------|------------|
| เข้าถึงตาม index เร็ว | Array |
| ค้นหาเร็ว (เรียงลำดับแล้ว) | Binary search tree |
| เพิ่ม/ลบเร็ว | Linked list หรือ Hash map |
| พฤติกรรม LIFO | Stack |
| พฤติกรรม FIFO | Queue |
| คู่ key-value | Hash map |
| ข้อมูลแบบลำดับชั้น | Tree |

## Trade-offs

ทุก data structure มี trade-offs:
- Arrays อ่านเร็ว แต่แก้ไขช้า
- Linked lists แก้ไขเร็ว แต่ค้นหาช้า
- Hash maps เร็วสำหรับส่วนใหญ่ แต่ใช้หน่วยความจำมากกว่า
- Trees รักษาลำดับได้ แต่ต้องเขียนโค้ดมากกว่า

เลือกตาม operation ที่ใช้บ่อยที่สุด

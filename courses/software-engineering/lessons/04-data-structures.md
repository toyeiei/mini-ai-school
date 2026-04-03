# Data Structures

Data structures organize data for efficient access and modification. Choosing the right one is key to writing good software.

## Arrays

Contiguous memory, fast access by index, slow insertions/deletions.

```javascript
const arr = [1, 2, 3, 4, 5];
arr[2];        // O(1) - Fast access
arr.push(6);   // O(1) - Amortized append
arr.unshift(0); // O(n) - Slow prepend
```

## Linked Lists

Each element points to the next. Fast insertions/deletions, slow access.

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

Key-value pairs, fast lookups.

```javascript
const map = new Map();
map.set('name', 'Alice');
map.get('name');      // 'Alice'
map.has('name');      // true
map.delete('name');   // true
```

## Stacks

LIFO (Last In, First Out).

```javascript
const stack = [];
stack.push(1);    // push
stack.push(2);
stack.pop();      // 2
stack.pop();       // 1
```

## Queues

FIFO (First In, First Out).

```javascript
const queue = [];
queue.push(1);    // enqueue
queue.push(2);
queue.shift();     // 1
```

## Trees

Hierarchical structure with parent-child relationships.

```javascript
class TreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}
```

Binary trees have at most two children per node.

## Choosing a Data Structure

| Need | Best Choice |
|------|------------|
| Fast access by index | Array |
| Fast search (sorted) | Binary search tree |
| Fast insertion/deletion | Linked list or Hash map |
| LIFO behavior | Stack |
| FIFO behavior | Queue |
| Key-value pairs | Hash map |
| Hierarchical data | Tree |

## Trade-offs

Every data structure has trade-offs:
- Arrays are fast to read, slow to modify
- Linked lists are fast to modify, slow to search
- Hash maps are fast for most operations, but use more memory
- Trees maintain order, but take more code to implement

Choose based on your most frequent operation.

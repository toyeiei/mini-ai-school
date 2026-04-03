# Algorithms

An algorithm is a step-by-step procedure for solving a problem. Understanding algorithms helps you write efficient code and choose the right approach.

## Measuring Algorithm Efficiency

We measure efficiency with **Big O notation**:

- **O(1)** - Constant time, doesn't scale
- **O(log n)** - Logarithmic, like binary search
- **O(n)** - Linear, each element is processed once
- **O(n log n)** - Linearithmic, like merge sort
- **O(n²)** - Quadratic, nested loops
- **O(2^n)** - Exponential, avoid when possible

## Common Algorithms

### Linear Search

Find an element in an array by checking each one:

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
// Time: O(n), Space: O(1)
```

### Binary Search

Find in a **sorted** array by halving the search space:

```javascript
function binarySearch(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === target) return mid;
        if (sortedArr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Time: O(log n), Space: O(1)
```

### Bubble Sort

Compare adjacent elements and swap if needed:

```javascript
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// Time: O(n²), Space: O(1)
```

### Merge Sort

Divide, sort, and merge:

```javascript
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    while (left.length && right.length) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return [...result, ...left, ...right];
}
// Time: O(n log n), Space: O(n)
```

## When to Use Which Algorithm

- **Unsorted data** - Linear search
- **Sorted data** - Binary search
- **Small datasets** - Bubble sort (simple)
- **Large datasets** - Merge sort or quicksort
- **Need fastest average** - Quicksort
- **Need stable, guaranteed O(n log n)** - Merge sort

## Choose Based on Context

There's no single "best" algorithm. The right choice depends on:
- How many items you're processing
- Whether the data is sorted
- Memory constraints
- Whether you need stability

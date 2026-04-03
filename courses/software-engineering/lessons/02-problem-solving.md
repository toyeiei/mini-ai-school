# Problem Solving

Problem solving is the core skill of software engineering. Every bug fixed and feature built starts with understanding a problem.

## Breaking Down Problems

When facing a complex problem:

1. **Understand the problem** - What are the inputs? What should the outputs be?
2. **Identify constraints** - What limits exist? Performance? Memory? Browser compatibility?
3. **Find similar problems** - Has someone solved this before?
4. **Break it into sub-problems** - Divide and conquer
5. **Solve each piece** - Build incrementally
6. **Combine and verify** - Does the whole solution work?

## Example: Building a Calculator

**Problem**: Build a calculator that adds two numbers.

**Inputs**: Two numbers (a, b)
**Output**: Their sum

```javascript
function add(a, b) {
    return a + b;
}
```

**Constraints**: What if inputs are not numbers?

```javascript
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}
```

## The Rubber Duck Method

Explain your problem to a rubber duck (or any object). As you describe it step by step, you often find the solution yourself. The act of articulating the problem reveals gaps in understanding.

## Problem-Solving Patterns

### Pattern 1: brute Force
Try every possible solution until one works.

```javascript
function findPairSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
```

### Pattern 2: Two Pointers
Use two pointers moving toward each other.

```javascript
function findPairSumSorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum < target) left++;
        else right--;
    }
    return null;
}
```

## Practice Problems

- Reverse a string
- Check if a number is prime
- Find the longest word in a sentence
- Remove duplicates from an array
- Check if two strings are anagrams

The key to problem solving is practice. Each problem you solve builds your intuition for the next one.

# Programming Basics

Let's cover the fundamental building blocks of any program.

## Statements

A statement is a single instruction that the computer executes. In JavaScript, statements end with a semicolon.

```javascript
console.log('Hello, World!');
```

## Expressions

An expression produces a value. You can think of it as a question that has an answer.

```javascript
5 + 3  // evaluates to 8
```

## Comments

Comments are notes for humans reading your code. The computer ignores them.

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
```

## Basic Output

You can display information using `console.log`:

```javascript
console.log('Message here');
console.log(42);
console.log(true);
```

## Basic Input

In the browser, you can use `prompt()` to ask for user input:

```javascript
let name = prompt('What is your name?');
console.log('Hello, ' + name);
```

## Whitespace

JavaScript generally ignores extra spaces, tabs, and line breaks. Use whitespace to make your code readable:

```javascript
// Hard to read
let x=1+2;

// Easy to read
let x = 1 + 2;
```

## Summary

- Programs are made of statements
- Expressions produce values
- Comments help humans understand code
- Use `console.log` for output

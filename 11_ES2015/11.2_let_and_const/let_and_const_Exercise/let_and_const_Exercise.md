# ***let* and *const* Exercise**

In this exercise, you’ll refactor some ES5 code into ES2015.

## **ES5 Global Constants**

```jsx
var PI = 3.14;
PI = 42; // stop me from doing this!
```

## **ES2015 Global Constants**

```jsx
/* Write an ES2015 Version */
const PI = 3.14;
```

## **Quiz**

- What is the difference between ***var*** and ***let***?
var can be reassigned and redeclared
let can exist inside a code block. It can also be reassigned but not redeclared

- What is the difference between **var** and ***const***?
const cannot be reassigned or redeclared. It is also block-scoped, like let.

- What is the difference between **let** and **const**?
let can be reassigned and const cannot

- What is hoisting?
The built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution
// Question 1: What is syntax in programming, and why is it important in JavaScript?
// Answer: 
// "Syntax refers to the rules and principles that define how a program should be written 
// and understood in a programming language. In JavaScript, syntax is essential for avoiding 
// errors and ensuring that the code runs as intended."

// Question 2: What is the purpose of using semicolons (;) in JavaScript? Are they mandatory?
// Answer: 
// "Semicolons are used to terminate statements in JavaScript. While they are optional, 
// it is recommended to use them for better readability and to prevent potential issues."

// Question 3: Write a single-line comment and a multi-line comment in JavaScript.
// Answer: 
// Single-line comment
// This is a single-line comment

/* Multi-line comment
   This is an example
   of a multi-line comment */

// Question 4: Name the three ways to declare variables in JavaScript. What is the difference between them?
// Answer: 
// 1. `var` - The old way of declaring variables in JavaScript. It is function-scoped.
// 2. `let` - Block-scoped, allowing reassignment of values.
// 3. `const` - Block-scoped and used to declare constants that cannot be reassigned.

// Question 5: What are the data types in JavaScript? Provide an example for each.
// Answer:
// JavaScript is dynamically typed, meaning a variable can hold different data types. Examples include:
// 1. Number: 5
// 2. String: "hello"
// 3. Boolean: true or false
// 4. Object: { key: "value" }
// 5. Array: [1, 2, 3]
// 6. Undefined: A variable declared but not assigned a value
// 7. Null: A primitive type representing an intentional absence of value

// Question 6: Declare a variable using let and assign it the value of your favorite number.
// Answer:
let favNum = 7;

// Question 7: Write a code snippet to demonstrate the use of an arithmetic operator and a logical operator.
// Answer:
// Arithmetic Operator:
let a = 5;
let b = 6;
const sum = a + b;
console.log(sum); // Outputs: 11

// Logical Operator:
let c = 5;
if (c === 5 || c < 5) {
  console.log("Logical operators in action!"); // Outputs: Logical operators in action!
}

// Question 8: Write an if-else statement that checks if a number is even or odd.
// Answer:
let num = 10;
if (num % 2 === 0) {
  console.log("num is an even number");
} else {
  console.log("num is an odd number");
}

// Question 9: How does a for loop differ from a while loop? Write an example of both.
// Answer:
// A for loop runs for a specific number of iterations, while a while loop continues as long as a condition is true.

// For loop:
let forLoopArray = [11, 12, 13, 14];
for (let i = 0; i < forLoopArray.length; i++) {
  console.log(forLoopArray[i]); // Outputs: 11, 12, 13, 14
}

// While loop:
let count = 0;
while (count < 5) {
  console.log(count); // Outputs: 0, 1, 2, 3, 4
  count++;
}

// Question 10: What does the following code output? Explain why:
let x = 5;
if (x > 3 && x < 10) {
  console.log("x is between 3 and 10");
} else {
  console.log("x is out of range");
}
// Answer: The output is "x is between 3 and 10" because x (5) satisfies both conditions: greater than 3 and less than 10.

// Question 11: What is the difference between a function declaration and an arrow function?
// Answer:
// A function declaration is the traditional way to define a function in JavaScript, while an arrow function 
// (introduced in ES6) is a more concise way to define functions with lexical `this` binding.

// Question 12: Write a function that takes two numbers as arguments and returns their sum.
// Answer:
function Sum(num1, num2) {
  return num1 + num2;
}
console.log(Sum(2, 2)); // Outputs: 4

// Question 13: Rewrite the function in Question 12 as an arrow function.
// Answer:
const sumArrow = (num1, num2) => {
  return num1 + num2;
};
console.log(sumArrow(3, 3)); // Outputs: 6

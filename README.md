# JavaScript-Hindi
modern javascript series
Here’s a **detailed summary of all important JavaScript topics**, covering both fundamentals and advanced concepts.

---

# **JavaScript Complete Summary**

## **1. Introduction to JavaScript**
- **Definition**: JavaScript is a lightweight, interpreted programming language used for web development.
- **Use Cases**: Web applications, frontend & backend development (Node.js), mobile apps, game development, etc.
- **How It Works**: It runs in browsers (client-side) and on servers (Node.js).

---

## **2. JavaScript Basics**
### **Variables and Constants**
- `var` (Function-scoped, can be redeclared)
- `let` (Block-scoped, cannot be redeclared)
- `const` (Block-scoped, immutable reference)

Example:
```javascript
let name = "John";
const age = 30;
var city = "New York";
```

### **Data Types**
- **Primitive**: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- **Reference**: `Object`, `Array`, `Function`

Example:
```javascript
let str = "Hello";   // String
let num = 42;        // Number
let isValid = true;  // Boolean
let obj = { key: "value" };  // Object
let arr = [1, 2, 3]; // Array
```

---

## **3. Operators**
### **Arithmetic Operators**
`+`, `-`, `*`, `/`, `%`, `**` (Exponentiation)

### **Comparison Operators**
`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`

### **Logical Operators**
`&&`, `||`, `!`

Example:
```javascript
let a = 10, b = 5;
console.log(a > b && b < 20); // true
```

---

## **4. Control Structures**
### **Conditional Statements**
#### **if-else**
```javascript
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```
#### **switch**
```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  default:
    console.log("Not Monday");
}
```

### **Loops**
#### **for Loop**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
#### **while Loop**
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
#### **do-while Loop**
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## **5. Functions**
- **Function Declaration**
```javascript
function greet(name) {
  return "Hello, " + name;
}
```
- **Function Expression**
```javascript
const greet = function(name) {
  return "Hello, " + name;
};
```
- **Arrow Function (ES6)**
```javascript
const greet = (name) => `Hello, ${name}`;
```
- **IIFE (Immediately Invoked Function Expression)**
```javascript
(function() {
  console.log("IIFE executed!");
})();
```

---

## **6. Objects**
- **Object Creation**
```javascript
let person = {
  name: "John",
  age: 25,
  greet: function() {
    console.log("Hello!");
  }
};
```
- **Accessing Properties**
```javascript
console.log(person.name); // John
console.log(person["age"]); // 25
```

---

## **7. Arrays**
- **Array Methods**
```javascript
let arr = [1, 2, 3, 4];
arr.push(5);    // Add at end
arr.pop();      // Remove last element
arr.shift();    // Remove first element
arr.unshift(0); // Add at start
arr.slice(1, 3); // Extract part of array
arr.splice(2, 1); // Remove element at index 2
```

---

## **8. ES6 Features**
### **Template Literals**
```javascript
let name = "John";
console.log(`Hello, ${name}!`);
```
### **Destructuring**
```javascript
const user = { name: "Alice", age: 24 };
const { name, age } = user;
console.log(name, age);
```
### **Spread & Rest Operator**
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
```
```javascript
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val);
}
console.log(sum(1, 2, 3, 4)); // 10
```
### **Modules (Import/Export)**
```javascript
// file1.js
export const name = "John";

// file2.js
import { name } from './file1.js';
console.log(name);
```

---

## **9. Asynchronous JavaScript**
### **Callbacks**
```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}
fetchData(console.log);
```
### **Promises**
```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 2000);
});
promise.then(console.log).catch(console.error);
```
### **Async/Await**
```javascript
async function fetchData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let json = await data.json();
  console.log(json);
}
fetchData();
```

---

## **10. DOM Manipulation**
### **Selecting Elements**
```javascript
document.getElementById("id");
document.querySelector(".class");
```
### **Modifying Elements**
```javascript
document.getElementById("demo").innerHTML = "Hello World!";
```
### **Event Listeners**
```javascript
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## **11. Error Handling**
```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Always executes");
}
```

---

## **12. Object-Oriented Programming (OOP)**
### **Classes (ES6)**
```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
let p1 = new Person("Alice", 24);
p1.greet();
```

---

## **13. LocalStorage & SessionStorage**
```javascript
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
```

---

## **14. Fetch API (AJAX Requests)**
```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## **15. Node.js (Backend JavaScript)**
```javascript
const fs = require('fs');
fs.writeFileSync("file.txt", "Hello World!");
```

---

# **Conclusion**
JavaScript is an essential language for web development, with features that enable **frontend and backend programming, OOP, functional programming, and asynchronous programming**. Mastering these topics will help you build interactive web applications efficiently.

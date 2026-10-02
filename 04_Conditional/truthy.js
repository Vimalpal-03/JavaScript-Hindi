// Nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined. It does not consider other falsy values like 0, '', or false.

// Example 1: Using nullish coalescing operator
let value1 = null;
let defaultValue1 = 'Default Value';
let result1 = value1 ?? defaultValue1; // result1 will be 'Default Value'

console.log(result1); // Output: Default Value

// Example 2: Using nullish coalescing operator with undefined
let value2 = undefined;
let defaultValue2 = 'Another Default Value';
let result2 = value2 ?? defaultValue2; // result2 will be 'Another Default Value'

console.log(result2); // Output: Another Default Value

// Example 3: Using nullish coalescing operator with a falsy value (0)
let value3 = 0;
let defaultValue3 = 'Yet Another Default Value';
let result3 = value3 ?? defaultValue3; // result3 will be 0, because 0 is not null or undefined

console.log(result3); // Output: 0

let value4 = '';
let defaultValue4 = 'Default for Empty String';
let result4 = value4 ?? defaultValue4; // result4 will be '', because '' is not null or undefined

console.log(result4); // Output: (an empty string)

let value5;
value5 = null ?? 25 ?? 15; // value5 will be 25, because the first operand is null, so it evaluates to the second operand

console.log(value5); // Output: 25

let value6;
value6 = undefined ?? 30 ?? 20; // value6 will be 30, because the first operand is undefined, so it evaluates to the second operand

console.log(value6); // Output: 30

let value7;
value7 = 0 ?? 40 ?? 10; // value7 will be 0, because 0 is not null or undefined, so it evaluates to the first operand

console.log(value7); // Output: 0

let value8;
value8 = '' ?? 50 ?? 5; // value8 will be '', because '' is not null or undefined, so it evaluates to the first operand

console.log(value8); // Output: (an empty string)


// Ternary operator (?:) is used to evaluate a condition and return one of two values based on whether the condition is true or false.

// Example 1: Using ternary operator
let age = 18;
let canVote = (age >= 18) ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log(canVote); // Output: Yes, you can vote.

// Example 2: Using ternary operator with a different condition
let score = 75;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : (score >= 60) ? 'D' : 'F';
console.log(grade); // Output: C

// Example 3: Using ternary operator with a boolean value
let isMember = true;
let discount = isMember ? 'You get a discount!' : 'No discount for non-members.';
console.log(discount); // Output: You get a discount!   

const iceTeaPrice = 100;
(iceTeaPrice > 50) ? console.log("I will buy Ice Tea") : console.log("I will not buy Ice Tea"); // Output: I will buy Ice Tea


let teaVariety = 'oolong';
let teaMessage = (teaVariety === 'green') ? 'Green tea is healthy.' : (teaVariety === 'black') ? 'Black tea is strong.' : (teaVariety === 'oolong') ? 'Oolong tea is aromatic.' : 'Unknown tea variety.';
console.log(teaMessage); // Output: Oolong tea is aromatic.
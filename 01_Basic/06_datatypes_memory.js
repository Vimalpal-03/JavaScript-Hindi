// stack (primitive)

let numberOne="JavaScript";
let numberTwo=numberOne;

console.log(numberTwo);
console.log(numberOne);

// stack memory means they copy the variable value of primitive datatypes.


// Heap (non-primitive)

let userOne={
    email:"test@gmail.com",
    profile:"developer"
}
let userTwo=userOne;
userTwo.email="test@google.com"

// In Heap Memory they copy the reference of a variables in non-primitive datatypes 
console.log(userOne.email);
// console.log(userTwo.email);


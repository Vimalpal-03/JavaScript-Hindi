


function idName() {
    console.log("V");
    console.log("i");
    console.log("m");
    console.log("a");
    console.log("l");
}

// idName();


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,5);
// addTwoNumbers(4,"8")

function addTwoNumbers(number1, number2) {
    // let result=number1+number2;
    // console.log("Vimal");
   //  return result;
     return number1+number2;
}
const result=addTwoNumbers(6,2);
console.log("Result:",result);


function isLoggedIn(userName){
    if(userName===undefined){
        console.log("plase enter a username");
        return;
    }
   return `${userName} just loggedIn`
}
// console.log(isLoggedIn("vimal"));
console.log(isLoggedIn());




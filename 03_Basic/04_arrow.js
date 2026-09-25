const user = {
    userName: "Vimal",
    price: "499",

    loggedMessage: function () {
        console.log(` hii... ${this.userName}, Welcome to website`);
        // 'this' current context ko refer karta hai
        // console.log(this);
    }

}
//  user.loggedMessage();
//  user.userName="Vayu"
//  user.loggedMessage()

// console.log(this);
/*
In the above consonle that ' this ' give a empty object in node environment 
because there is no context in global but in browser it gives a window browser object
*/
 
function code(){
    // console.log(this)
}
code()

const cod = function () {
    let name = "Vimal"
    // console.log(this.name); 
    // undefined because this is working in object not in function
}
cod();

// const cod=()=>{
//     let name="Vimal"
//     console.log(this.name);
// }
// cod();


//++++++++++ Arrow function +++++++++++
// const sumTwo = (num1, num2) => {
//     return num1 + num2;
/* explicit rerurn*/ 
// }
// console.log(sumTwo(3,4))

// const sumTwo=(num1,num2)=>(num1+num2);
/* implicit return me ham return word use nhi karte hai bas
me print kr dete hai small code ko
*/
const sumTwo = (num1, num2) => ({ userName: "vayu" });

console.log(sumTwo(3,4))

 
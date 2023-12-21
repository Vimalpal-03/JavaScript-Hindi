const user = {
    userName: "Vimal",
    price: "499",

    loggedMessage: function () {
        console.log(` hii... ${this.userName}, Welcome to website`);
        // console.log(this);
    }

}
//  user.loggedMessage();
//  user.userName="Vayu"
//  user.loggedMessage()

// console.log(this);


const cod = function () {
    let name = "Vimal"
    // console.log(this.name);
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
// }
// console.log(sumTwo(3,4))

// const sumTwo=(num1,num2)=>(num1+num2);
const sumTwo=(num1,num2)=>({userName:"vayu"});

console.log(sumTwo(3,4))


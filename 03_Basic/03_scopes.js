let a=111;
const b=222;
var c=45;
// console.log("outer:",a);
// console.log("outer:",b);
// console.log("outer:",c);
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner:",a);
    // console.log("inner:",b);


}

// console.log(a);
// console.log(b)
// console.log(c);


function one(){
    let userName="Vimal";

    function two(){
        let websiteName="Youtube";
        // console.log(userName);
    //  console.log(websiteName); 

    }
    // console.log(websiteName);
    two()
}
one()


if(true){
    const userName="Vimal"
    if(userName==="Vimal"){
        const websiteName=" Youtube"
        // console.log(userName + websiteName);
    }
    // console.log(websiteName);
}
// console.log(userName);

// +++++++++++++++++++ Intresting ++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num+1
}
// addOne(5)


console.log(addTwo(5));
// it is called hoisting
let addTwo=function (num){
return num+2
}
// console.log(addTwo(5));
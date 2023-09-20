
// let myDate= new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate)

// let myCreatedDate=new Date(18,8,2023);
// let myCreatedDate=new Date(18,8,2023,2,59);
// let myCreatedDate=new Date("2023-09-18");
let myCreatedDate=new Date("09-18-2023");

console.log(myCreatedDate.toLocaleString());

//  Time_Stamp
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1)

newDate.toLocaleString('default',{
    dateStyle:"long",
    weekday:"long",
    minute:"numeric",
    hourCycle:"h24"
})








// Immediately Invocked Function Expression

function peo(){
    // console.log(`DB CONNECTED`);
}
peo();

// IFFE
/*
global scope ke pollution se problemhoti hai kai bar,
global scope ke jo variables ya declaration  jo bhi pollution  hai unhe hattane ke 
liye hamne IIFE ka use kiya.
*/
(function greet(){
    // this is named IFFE
    console.log(`DB TWO CONNECTED`);
})();


((name)=>{
    // This is simple IFFE
    console.log(`DB THREE CONNECTED ${name}`);
})('Vimal')
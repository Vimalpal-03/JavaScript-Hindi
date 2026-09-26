console.log('Hii, Conditional')

const isUserLoggedIn=true;
const isUserAdmin=false;

if(isUserLoggedIn && isUserAdmin){
    // console.log('Welcome Admin');
}
else if(isUserLoggedIn && !isUserAdmin){
    // console.log('Welcome User');
}
else{
    // console.log('Please Login');
}

const temperature=42;
if(temperature>40){
    // console.log('It is too hot outside');
}
else if(temperature>30){
    // console.log('It is hot outside');
}
else if(temperature>20){
    // console.log('It is warm outside');
}
else if(temperature>10){
    console.log('It is cool outside');
}
else{
    // console.log('It is cold outside');
}   
//  esle if
const balance=100;

// if(balance>500) console.log('test'),console.log('Your balance is good');
if(balance>500) {
    // console.log('Your balance is good');
}
else if(balance>100) {
    // console.log('Your balance is average');
}
else if(balance>0) {
    // console.log('Your balance is low');
}
else{
    // console.log('Your balance is negative');
}  

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy a course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}


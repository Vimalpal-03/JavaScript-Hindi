let userName="Vimal";
let lectureNumber="7";

// console.log(userName+lectureNumber);


//  the given below mwthods is called string interpolation.
console.log(`hii this is ${userName} and its a lectue no ${lectureNumber} of javascript hindi series `);

const lectureName=new String("String_in_Javascript");
console.log(lectureName[12]);
console.log(lectureName.__proto__);
console.log(lectureName.toUpperCase());
console.log(lectureName.charAt(4));
console.log(lectureName.indexOf('r'));

const myString=lectureName.substring(0,9);
console.log(myString);

const anotherString=lectureName.slice(-12,14);
console.log(anotherString);

const firstString="    Javascript  Developer  "
console.log(firstString);
console.log(firstString.trim());

const url="https://vimal.com%20softwaremadebyvimal";

console.log(url.replace('%20','-'));
console.log(url.includes('java'));
console.log(url.includes('software'));




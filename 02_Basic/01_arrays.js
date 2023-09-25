const myArr=[0,1,2,3,4,67,8,99]
// console.log(myArr[4]);

// const myArr2=new Array(1,2,3,4)
// console.log(myArr2);
// const carCompany=["Volvo","Tata","Ford","Jeep"];
// console.log(carCompany.length);

// //----->>>> array method
// myArr.push(5);
// console.log(myArr);
// myArr.push(15);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(19);
// myArr.shift();

// console.log(myArr);

// console.log( myArr.includes(99));
// console.log( myArr.indexOf(99));

// const newArr=myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//  slice &  splice
console.log("A",myArr);

const myN1=myArr.slice(1,3);
console.log(myN1);
console.log("B",myArr)

const myN2=myArr.splice(1,3);
console.log("c",myArr)
console.log(myN2);


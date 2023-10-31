// singleton object
// const tinderUser=new Object();
// console.log(tinderUser);

// non-singleton object
const tinderUser={};
// console.log(tinderUser);

const realUser={
    id:"@12",
    name:"real",
    email:"real@gmail.com",
    isLoggedIn:"false"
}
// console.log(realUser);

const cloudUser={
    email:"cloud@gmail.com",
    fullName:{
        userName:{
            firstName:"Vimal",
            lastName:"Pal"
        }
    }
}
console.log(cloudUser.fullName.userName);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};

// console.log(obj1,obj2,obj3);
// const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3};
console.log(obj4);

const users=[
    {
        id:"1",
        email:"one@gmail.com",
    },
    {
        id:"2",
        email:"two@gmail.com"
    }
]
console.log(users[1].email)

console.log(Object.keys(realUser));
console.log(Object.keys(realUser));
console.log(Object.entries(realUser));
console.log(realUser.hasOwnProperty('isLoggedIn'));

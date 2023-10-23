console.log("this is object lecture 1");

//singleton
// Object.create

// Object literals
const mySym=Symbol("key1");
console.log(typeof mySym);

const JsUser={
    [mySym]:"mykey1",
    name:"Vimal",
    age:"25",
    location:"Hapur",
    email:"test123@google.com",

    "Full name":"Vimal Pal",
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser[mySym]);

JsUser.email="tech123@gmail.com"
// Object.freeze(JsUser)
JsUser.email="code123@gmail.com"
Object.freeze(JsUser)

console.log(JsUser);
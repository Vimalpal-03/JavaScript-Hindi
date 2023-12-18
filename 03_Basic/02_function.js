function calAddToPrice(val1, val2, ...num) {
    return val1, val2, num
}

console.log(calAddToPrice(10, 20, 50, 100, 200, 500, 2000));

const user = {
    userName: "Vimal",
    price: "250"
}

function handlerObject(anyobject) {
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
// handlerObject(user);
handlerObject({
    userName:"Sam",
    price:200
});

const myArray=[10,20,30,40,50]

function returnAnyValue(getArray){
    return getArray[2];
}

// console.log(arrayHandler(myArray))
console.log(returnAnyValue([5,10,15,20,25]))

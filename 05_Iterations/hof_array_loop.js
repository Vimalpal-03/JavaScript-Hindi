const arr = [1,2,3,4,5];
for(const num of arr) {
    // console.log(num);
}

const greetings = 'Hello World!';
for(const greet of greetings) {
    if(greet === ' ') {
        console.log(greet); // Print the space character
        break; // Exit the loop after printing the first non-space character
    }
    // console.log(`Each char is: ${greet}`);
}

// Maps
// map is a collection of key-value pairs where keys can be of any data type and values can also be of any data type. 
// It maintains the order of insertion and allows for easy retrieval of values based on their keys.
const map=new Map();
map.set('name','Shrey');
map.set('age',7);
map.set('city','Hapur');

map.set('Name','Ashmit');
map.set('Age',4);
map.set('City','Hapur');

// console.log(map);

// for of loop with map
// for of loop can be used to iterate over the entries of a map. 
// Each entry is an array containing the key and value, which can be 
// destructured in the loop.
for(const [key,value] of map) {
    // console.log(key);
    console.log(`Key is: ${key} and Value is: ${value}`);
    // console.log(key + ': ' + value);
}


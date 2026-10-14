const myObject={
    js:'JavaScript',
    py:'Python',
    rb:'Ruby',
    swift:'Swift by Apple',
}
/* for in loop use case: The for...in statement iterates over all 
enumerable properties of an object that are keyed by strings 
(ignoring ones keyed by Symbols), including inherited enumerable 
properties. It is recommended to use for...in loops only to iterate 
over the properties of an object. If you want to iterate over the 
elements of an array, use a for loop or the for...of loop instead.    

*/

// for in loop definition: The for...in statement iterates over all 
// enumerable properties of an object that are keyed by strings 
// (ignoring ones keyed by Symbols), including inherited enumerable 
// properties.
for (const key in myObject){
    // console.log(key);
    // console.log(`Key shortcut: ${key} and Its Value is: ${myObject[key]}`);
}


const myArray=['JavaScript','Python','Ruby','Swift by Apple'];
for (const index in myArray){
    // console.log(index);
    console.log(`Index is: ${index} and Its Value is: ${myArray[index]}`);
}
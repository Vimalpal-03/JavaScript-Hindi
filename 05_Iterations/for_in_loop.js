const myObject={
    js:'JavaScript',
    py:'Python',
    rb:'Ruby',
    swift:'Swift by Apple',
}
for (const key in myObject){
    // console.log(key);
    // console.log(`Key shortcut: ${key} and Its Value is: ${myObject[key]}`);
}


const myArray=['JavaScript','Python','Ruby','Swift by Apple'];
for (const index in myArray){
    // console.log(index);
    console.log(`Index is: ${index} and Its Value is: ${myArray[index]}`);
}
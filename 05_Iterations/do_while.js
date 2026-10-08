let index = 11;
do {
    console.log(`the index value is: ${index}`);
    index++;
} while (index <= 10);

let myArray = ['apple', 'banana', 'cherry', 'date'];
let arrayIndex = 0;
do {
    console.log(`The fruit at index ${arrayIndex} is: ${myArray[arrayIndex]}`);
    arrayIndex++;
} while (arrayIndex < myArray.length);

// do while  code example

let play=true;
do {
    console.log('Playing the game...');
    // Simulate some game logic here
    play = false; // Change this to true to continue playing
} while (play);



// example of even number generator using do while loop
let evenNumber = 0;
do {
    console.log(`Even number: ${evenNumber}`);
    evenNumber += 2;
} while (evenNumber <= 20);
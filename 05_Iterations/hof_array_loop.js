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
    console.log(`Each char is: ${greet}`);
}
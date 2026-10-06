for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}

for (let index = 0; index <= 10; index++) {
    const element = index * 2;
    console.log(element);
}

for (let index = 10; index >= 0; index--) {
    const element = index;
    console.log(element);
}

// print even numbers from 0 to 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// print odd numbers from 0 to 20
for (let index = 0; index <= 20; index++) {
    if (index % 2 !== 0) {
        console.log(index);
    }
}

// print prime numbers from 0 to 20 
for (let i = 2; i <= 20; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}           

for (let i = 0; i <= 10; i++){
    console.log(`outer loop for index: ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(`table of ${i}: ${i} * ${j}= ${i * j} `);
    }

}

let myArray = ['olong tea', 'black tea', 'green tea', 'herbal tea', 'chai tea'];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// for(let i=1; i<=10;i++){
//     if(i==6){
//         console.log('detected 6');
//         break;
//     }
//     console.log(i);
// }

for(let i=1; i<=10;i++){
    if(i==6){
        console.log('skipping 6');
        continue;
    }
    console.log(i);
}
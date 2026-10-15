const programmingLang = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// callback function

// 1. callback function me hum ek function ko as an argument pass karte hai, 
// jo ki forEach loop ke andar call hota hai.

// 2. callback function me hum function ka name nhi dete hai, 
// hum function ko directly pass karte hai as an argument.

// programmingLang.forEach(function(lang){
//     console.log(lang);
// })

// arrow function
// programmingLang.forEach((lang ,index, array) => {
//     console.log(lang, index, array);
// });


// array me multiple object bna ke forEach loop ke through unhe access kar sakte hai.

const myCodingLang=[
    {
        lang: 'JavaScript', level: 'Beginner'
    },
    {
        lang: 'Python', level: 'Intermediate'
    },
    {
        lang: 'Java', level: 'Advanced'
    },
    {
        lang: 'C++', level: 'Expert'
    },
    {
        lang: 'Ruby', level: 'Beginner'
    }
];

myCodingLang.forEach((val)=> {
    // console.log(val.lang, val.level);
    console.log(`Language: ${val.lang}, Level: ${val.level}`);

})

const marvel_Heros=['Thor','Ironman','Hulk'];
const dc_Heros=['Superman','Aquaman','Batman'];
const indian_heros=['krrish','Drona','Mr.India'];

// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);


//----->>>> concating method
const hollywood_Heros=marvel_Heros.concat(dc_Heros);
console.log(hollywood_Heros);


//----->>>>> spread operator
const all_heros=[...marvel_Heros,...indian_heros,...dc_Heros];
console.log(all_heros);

const another_array=[1,2,3,4,5,[33,44,55],6,7,[66,77,[11,22]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray('Vimal'));
console.log(Array.from('Vimal'));
console.log(Array.from({name:'Vimal'}));

let val_1=100;
let val_2=200;
let val_3=300;
console.log(Array.of(val_1,val_2,val_3));






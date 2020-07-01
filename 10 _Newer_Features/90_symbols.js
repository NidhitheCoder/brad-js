// const sym1 = Symbol(); // it is a premitive value
// const sym2 = Symbol('sym2');
//  console.log(sym1);
//  console.log(sym2);
//  console.log(typeof sym2);
//  console.log(Symbol('123') === Symbol('123'));
// //  console.log(`hello ${sym1}`); // getting error can't convert symbol to string
//  console.log(`hello ${String(sym1)}`);
//  console.log(`hello ${sym1.toString()}`);


// Unique object keys 
const KEY1 = Symbol();
const KEY2 = Symbol();

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3'; // regular property
myObj.key4 = 'prop4'; // regular property

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);


// // symbols are not enumarable in for ... in 
// for(let i in myObj) {
//     console.log(`${i} : ${myObj[i]}`); // only console regular property becouse of Symbols are not enumarable
// }

// Symbol are ignored by JSON.Stringify()
console.log(JSON.stringify({key:'props'}));
console.log(JSON.stringify({[Symbol('symbol')]:'hello'}));
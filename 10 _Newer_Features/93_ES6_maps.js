// SETS - store more unique values of any type;
const set1 = new Set();

// add values by set
set1.add(100);
set1.add("a simple string");
set1.add({ name: "john" });
set1.add(true);
set1.add(100); //it is not displayed becouse of set 100 is added already
// console.log(set1);

// const set2 = new Set([1,true,'string']);
// console.log(set2);

// console.log(set1)

// // get count
// console.log(set1.size);

// // check for values
// console.log(set1.has(100)); // true
// console.log(set1.has(50+50)); // true
// console.log(set1.has({name:'john'})); //false
// // ^ false beacouse of it is an reference object  this is not actually values stored

// console.log({name:'john'} === {name:'john'}); // false they pointing different location of memory and they are different existance

// console.log('hello' === 'hello'); // true becouse of it is premitive value;

// // delete from set
set1.delete(100);
// console.log(set1);

// ITTERATING THROUGH SETS

// // for..of
// for (let item of set1) {
//     console.log(item);
// }

//  3 of the below loops return same results entries displaying with some change only
// for (let item of set1.keys()) {
//     console.log(item);
// }

// for(let item of set1.values() ) {
//     console.log(item);
// }

// // for( let item of set1.entries()) {
// //     console.log(item);
// // }

// // for each
// set1.forEach((value) => {
//     console.log(value)
// })

// CONVERT SET TO ARRAYS
const setArr = Array.from(set1);
console.log(setArr);

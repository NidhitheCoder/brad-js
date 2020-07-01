// MAPS - key value pairs -can use ANY type as a key or value
const map1 = new Map();

// set keys
const key1 = "some string ",
  key2 = {},
  key3 = function() {};

// set map values by key
map1.set(key1, "value of key 1");
map1.set(key2, "value of key 2");
map1.set(key3, "value of key 3");

// // get values by key
// console.log(map1.get(key1),map1.get(key2),map1.get(key3));

// // count values
// console.log(map1.size);

// Itteration through the maps

// // loop using for ...of to get keys and values
// for (let [key,value] of map1) {
// console.log(`${key} : ${value}`);
// }

// // iterate keys only
// for(let key of map1.keys()){
//     console.log(key);
// }

// // iterate keys only
// for(let value of map1.values()) {
//     console.log(value);
// }

// // loop using forEach
// map1.forEach((value,key) => {
//     console.log(`${key} : ${value}`);
// })

// CONVERT TO ARRAYS

// // create an arraynof key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// // create an array of the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// create an array of the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);

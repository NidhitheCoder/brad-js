// String
const name1 = "Jeff";
 const name2 =new String("jeff"); //create objects using constructor

 name2.foo = "bar"; // setting foo property to the name2 and assign value is 'bar
//  console.log(name1);
//  console.log(name2);
// console.log(typeof name1);
// console.log(typeof name2);

// // if( name1 === 'Jeff') {
// if(name2 === 'Jeff') {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// Number
const num1 = 5;
const num2 = new Number(5);
// console.log(num1);
// console.log(typeof num1);
// console.log(num2);
// console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
// console.log(bool1);
// console.log(typeof bool1);
// console.log(bool2);
// console.log(typeof bool2);

// Function
const getSum1 = function (x,y) {
return x + y;
}
const getSum2 = new Function('x','y','return 1+1');
// console.log(getSum1(1,1));
// console.log(getSum2(1,1));

// Object
const obj1 = {name : "john"};
const obj2 = new Object({name : 'john'});
// console.log(obj1);
// console.log(obj2);

// Arrays
const arr1 = [1,2,3];
const arr2 = new Array(1,2,3);
// console.log(arr1);
// console.log(arr2);

// Regular Expressions
const reg1 = /\w+/;
const reg2 = new RegExp('\w+');
console.log(reg1);
console.log(reg2);

// // Source Edureka youtube channel :-)

// // Advanced working with functions 

// // #1 Recursion

// const pow = (x,n)=>{
//     return n === 1 ? x : x* pow(x,n-1);
// }

// console.log(pow(2,4)); //16
// console.log(pow(14,1));

// // #2 Closure
// const add = (() => {
//     let counter = 0;
//     return () => counter+=1;
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// // #3 The "New function"
// let sum = new Function('a','b', 'return a+b');
// console.log(sum(5,2));

// // #4 Arrow Function
//  hello = () => {
//       document.getElementById("demo").innerHTML += this;
// };

// // window object call the function
// window.addEventListener('load',hello);
// // Button object call function
// document.getElementById("btn").addEventListener('click',hello);

// // #5 Rest and spread Operator 
// // rest operator
// const fun = (...input) =>{
//     let sum = 0;
//     for(let i of input){
//         sum +=i;
//     }
//     return sum;
// }

// console.log(fun(10,20,30,40));
// console.log(fun(1,2,4));
// console.log(fun(100,20,3));

// // spread operator
// let arr1 =[1,2,3];
// let arr2 = [ 5,6,7];
// let arr = [...arr1,...arr2];
// console.log(arr);

// // #6 Global object
// alert("Hello");
// // similer to 
// window.alert("Hello");

// // #7 Function Objects
// const sayHi = () => {
// console.log("Hi");
// }

// console.log(sayHi.name);
// const f2 = (a,b) =>{};
// const many = (a,b,...more) => {};
// console.log(f2.length);
// console.log(many.length);

// // #8 SetItemout
// const sayHi = () => {
//     console.log("Hiii With setTimeout");
// };

// setTimeout(sayHi, 4000);

// // #9 setInterval
// let timerId = setInterval(() => {
//    console.log("tick tick");
// }, 2000);

// // After 10 second stop  
// setTimeout(() => {
//     clearInterval(timerId);
//     console.log("Stop the interval")
// }, 10000);

// // # 10 Function Binding
// let user = {
//     firstName:"Smith"
// };

// function func(){
//     console.log(this.firstName);
// };

// let funUser = func.bind(user);
// funUser();

// // #11 Javascript namespaces 
// let num = 5;
// let obj ={};
// let str ="String is";
// const sum = (x,y) =>{
//     total =x + y;
//     return total;
// };

// numr = sum(3,3);
// console.log(numr);

// // #12 Prototypes
// //  12.1 prototypal inheritance

// let pet = {
//     eats:true
// };

// let dog ={
//     jumbs:true
// };

// dog.__proto__ = pet; // (*);

// console.log(dog);

//  console.log(dog.eats);
//  console.log(dog.jumbs);

//  // 12.2 prototypes methods, objects without __proto__
//  let pet ={
//      eats:true
//  };

// //  Create new object with pet as a prototype
// let dog = Object.create(pet);
// console.log(dog.eats);

// console.log(Object.getPrototypeOf(dog) === pet);

// // Change the prototype of Dog
// Object.setPrototypeOf(dog,{});
// console.log(dog.eats) ;

// // #13 try catch method
//     try{
//         console.log("try begin");
//         let str = "funny";
//         str = str[game];
//         console.log("try ending " + str);
//     } catch( err) {
//         console.log("Error ");
//         console.log(err);
//     }

// // #14 Modules in Javascript

// let MODULE = (function(){
// let module ={};
// let privateVariable = 7;
// function privateMethod(){
//     //
// }

// module.moduleProperty =1;
// module.moduleMethod = function () {
//     // ...
// }

// return module;
// }());

// console.log(MODULE);

// Chaining in Javascript
account.number('112562354').setBalance(15000).applyCard(200);

$("#myDiv").removeClass("Off").addClass("On").css("background:'red'")
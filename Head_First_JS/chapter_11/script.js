// let board = document.getElementById("board");
// // function handler(){
// //    board.innerHTML = "Hellow welcome";
// // }

// // window.onload = handler;

// window.onload = function () {board.innerHTML = "Change text"}

// window.onload = init;

// let cookies = {
//     instructions : "Preheat oven to 350...",
//     bake : function(time){
//         console.log("Baking the cookies.");
//         setTimeout(done,time);
//     }
// };

// function init() {
// let button = document.getElementById("bake");
// button.onclick = handleButton;
// };

// function handleButton() {
//     console.log("Time to bake the cookies.");
//     cookies.bake(2500);
// };

// function done(){
//     alert("Cookies are ready, take them out to cool");
//     console.log("Cooling cookies");
//     let cool = function(){
//         alert("cookies are cool, time to eat.")
//     }

//     setTimeout(cool, 1000);

//     setTimeout(() => {
//         alert("Time to take cookies out of the oven");
//     }, 10000);
// }

// let migrating = true;

// let fly = function(num) {
//   let sound = "Flying";

//   function wingFlapper() {
//     console.log(sound);
//   }
//   for (let i = 0; i < num; i++) {
//     wingFlapper();
//   }
// };

// function quack(num) {
//   let sound = "Quack";
//   function quacker() {
//     console.log(sound);
//   }
//   for (let i = 0; i < num; i++) {
//     quacker();
//   }
// }

// if (migrating) {
//     quack(4);
//     console.log(fly);
//     fly(4);
//   }

// // lexical declaration
// let str = "This string have globel scope";

// // // globel scope of the variables
// // function whereAreYou(){
// //     let str =" I have local scope. inside whereAreYou function";
// //     // return str;

// //     function inner(){
// //         return str;
// //     }
// //     return inner();
// // }

// // let result = whereAreYou();
// // console.log(result);
// function whereAreYou() {
//   let str = "local scope string";
//   function inner() {
//     return str;
//   }

//   return inner;
// }

// let innerFunction = whereAreYou();
// let result = innerFunction();
// console.log(result);

// // usual way for counter
// let count = 0;

// function counter() {
//   count = count + 1;
//   return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

// // Using closure

// function makeCounter() {
//   let count1 = 0;
//   function counter1() {
//     count1 = count1 + 1;
//     return count1;
//   }
//   return counter1; // This is closure. it holds count in its environment.
// }

// let doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());

// // test one : closure
// function makePassword(password) {
//   return function(passwordGuess) {
//     return passwordGuess === password;
//   };
// }

// let doMakePassword = makePassword("truePassword");
// console.log(doMakePassword("wrongPassword"));
// console.log(doMakePassword("truePassword"));
// doMakePassword = makePassword("12345");
// console.log(doMakePassword("1236"));
// console.log(doMakePassword("12345"));

// // // test 2  closure:
// function multN(n) {
//   return function(num) {
//     return num * n;
//   };
// }

// let Multiply = multN(3);
// console.log(Multiply(2));
// console.log(Multiply(5));

// function makeTimer(doneMessage,n) {
//   setTimeout(function() {
//     alert(doneMessage);
//   }, n);
// };

// makeTimer("Cookies are done",1000);

// function handler(doneMessage) {
//   alert(doneMessage);
// }

// function makeTimer(doneMessage, n) {
//   setTimeout(handler(doneMessage), n);
// }

// makeTimer("cookies are Done.!", 5000);

// function setTimer(doneMessage, n) {
//   alert(doneMessage);
//   setTimeout(() => {
//     alert(doneMessage);
//   }, n);
//   doneMessage = " heyy new";
// }

// setTimer("Cookies are done..!", 3000);

// (function(food){
//   if(food === "cookies") {
//     alert("More please...");
//   } else if(food === "cake") {
//     alert("Yum yum..");
//   }
// })("cookies");

function testFood(food = "cookies") {
  if (food === "cookies") {
    alert("More please...");
  } else {
    alert("Yum yum");
  }
}

testFood();

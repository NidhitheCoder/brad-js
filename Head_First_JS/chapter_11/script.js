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

// lexical declaration 
let str = "This string have globel scope";

// // globel scope of the variables
// function whereAreYou(){
//     let str =" I have local scope. inside whereAreYou function";
//     // return str;

//     function inner(){
//         return str;
//     }
//     return inner();
// }

// let result = whereAreYou();
// console.log(result);

function whereAreYou(){
    let str = "local scope string";
    function inner(){
        return str;
    }

    return inner;
}

let innerFunction = whereAreYou();
let result = innerFunction();
console.log(result);
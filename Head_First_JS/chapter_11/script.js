
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

let migrating = true;

if(migrating) {
    quack(4);
    console.log(fly);
    fly(4);
}

let fly = function (num) {
    let sound = "Flying";

    function wingFlapper(){
        console.log(sound);
    }
    for(let i=0;i<num;i++){
       wingFlapper();
    }
};

function quack(num){
    let sound = "Quack";
    function quacker(){
        console.log(sound);
    }
    for(let i=0;i<num;i++){
       quacker();
    }
}
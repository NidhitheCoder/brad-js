// GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

// function test() {
//     var a = 4;
//     let b = 5;
//     const c =6;
//     console.log("function scope :",a,b,c)
// }
// test();

// if (true) {
//     //  block scope
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("if scope : ",a,b,c);
// }

for (let a = 0; a < 10 ; a++) { // if a declared with var data type then globel scope a will be 10
    console.log(`loop a :${a}`);
}

console.log("globalscope :",a, b, c); // if var datatype using in for loop then result will be 10,2,3
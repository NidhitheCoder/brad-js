// if(something){
//     do something
// }
// else{
//     do something
// }

const id = '100';

// // EQUAL TO
// if (id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log("CURRECT");
// } else {
//   console.log("INCORRECT");
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 100) {
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// if (id !== 100){
//     console.log("CORRECT");
// } else {
//     console.log("INCURRECT");
// }

// if (id) {
//     console.log(`the id is ${id}`);
// } else {
//     console.log("no ID")
// }

// // test if undefined
// if (typeof id !== 'undefined'){
//     console.log(`this is the id ${id}`);
// } else {
//     console.log("no id")
// }


// //  GREATER  OR LESS THAN
// if ( id > 200) { //if ( id < 200 ) for check id is lessthan 200
//     console.log("CORRECT");
// } else {
//     console.log("INCORRECT");
// }

// // GREATER EQUAL TO AND LESSTHAN EQUAL TO
// if (id >= 100){ // if (id <= 100) for check id lessthan or equql to 100
//     console.log("INCORRECT");
// } else {
//     console.log("CORRECT");
// }

// IF ELSE
// const color = "red";
// const color = "blue";
const color = "yellow";

if (color == "red") {
    console.log("colour is red");
} else if ( color == "blue"){
    console.log("colour is blue");
} else {
    console.log("colour is not blue or red")
}

// LOGICALL OPERATORS
const name = "smith";
const age = 12;

//  AND &&
if (age  > 0 && age < 12){
    console.log(`${name} is a child`);
} else if ( age >= 13 && age < 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`)
}

// OR ||
if ( age <16 || age > 65) {
    console.log(`${name}  not eligible for race`);
} else {
    console.log(`${name} registered for race`);
}

// TERNARY OPERATOR
console.log(age === 100 ? 'CORRECT' : 'INCORRECT');

//  WITHOUT BRACES
if (id === 100)
    console.log("CORRECT");
else 
    console.log("INCORRECT");
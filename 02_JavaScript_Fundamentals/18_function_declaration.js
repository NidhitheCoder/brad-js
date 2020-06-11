// FUNCTION DECLARATIONS
// function greet() {
//     console.log("Hello");
// }
// greet();

// function return
function greetReturn() {
  return "hello";
}
// console.log(greetReturn());

//  passing parameter to function
function welcome(name, secondName) {
  return "Welcome " + name + " " + secondName;
}
// console.log(welcome("julie","smith"));

// when pass nothing to a parameterized function
function greetings(name = "ram", sName = "raj") {
  // it set default value for parameters
  // if (typeof name == 'undefined') { name = "julie"}
  // if (typeof sName == 'undefined') {sName = "smith"}
  return "hello " + name + " " + sName;
}
// console.log( greetings())

// FUNCTION EXPRESSIONS

// default value of x is now 3.
const square = (function(x = 3) {
  return x * x;
});
  // console.log(square(8));

// // IMMEDIATLY INVOLCABLE FUNCTION EXPRESSION - IIFEs
// (function() {
//     console.log("check iife");
// })();

// // IFFE wih parameter
// (function(name){
//     console.log('hello ' + name);
// })('helen');

// PROPERTY METHOD
const todo ={
    add :function(){
        console.log("todo open..");
    },
    edit : function(no){
        console.log(`edit todo ${no}`);
    }
}

// declare function outside
 todo.delete = function (){
     console.log("delete todo");
 }
todo.add();
todo.edit(33);
todo.delete();
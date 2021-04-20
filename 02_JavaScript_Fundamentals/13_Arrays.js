// create some arrays
const number1 = [23,42,44,22,12,56,4,76,49,2,44]
const number2 = new Array(23,43,54,65,66);
const fruites = ["apple","orange","mango","grapes"];
const mixed=[23,"name",null,true,undefined,{name:"sara",age:33},["one","two","three"]];
console.log(mixed);

let val;
//  Get array lenght
val = number1.length;

//  check if is array
val = Array.isArray(number1);
val = Array.isArray("hello");

// For access a value from array
// val = number1[2];
val = number1[0];

//  Insert into arrays
number2[2] = 500;

// find index of value
val = number1.indexOf(44);

// MUTATING ARRAYS
//  add on to end of the array
number1.push(1000);

// add on to front of the array
number1.unshift(55);

//  delete from the end
number1.pop();

// delete from the start/front
number1.shift();

// splice a value
number1.splice(1,1)

//  reverse array
number1.reverse();

//  concatenate arrays
val = number1.concat(number2);

//  sort arrays
val = fruites.sort();

// val = number1.sort();
val = number1.sort(function compare(a,b){
    return a - b ;
})

//need decending order
val = number1.sort(function compare(a,b){
    return b - a;
});


// find first under 50 number
function under50(num){
    return num < 50;
}
val = number1.find(under50)

// find first over50 number
function over50(num){
    return num > 50;
}
val = number1.find(over50)

console.log(val);
console.log(number1);
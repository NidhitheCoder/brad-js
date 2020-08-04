var description = document.getElementById("description1");

if (description === null) {
  console.log("Something deosn't exist..");
}
let a = 0 / 0;
console.log("a : ", a); // return NaN
if (isNaN(a)) {
  console.log("a is NaN : ", a);
}

console.log("type of a : ", typeof a);
console.log("10 in isNaN : ", isNaN(10)); // return false
console.log("name in isNaN : ", isNaN("name")); // return true
console.log("10/0 :", 10 / 0); // return infinity
console.log("NaN === NaN : ", NaN === NaN); // return false
console.log("null === null : ", null === null); // return true
console.log("undefined === undefined : ", undefined === undefined); // return true
console.log("infinity-infinity : ", Infinity - Infinity);
let testMe = 99;
console.log("testMe == 99 : ", testMe == 99); // return true
console.log("textMe == '99' : ", testMe == "99"); // return true
// number to string
console.log("testMe == 'vannila' : ", testMe == "vannila"); // return false becouse of vannila convert to number then get NaN.

// number to boolean
console.log("1 == true : ", 1 == true); // return true. true converted to number then value become 1.
console.log("6 == true : ", 6 == true); // return false becouse of 6 not equal to 1(true).

// boolean to string
console.log("'1' == true : ", "1" == true); // return true
console.log("'6' == true : ", "6" == true); // return false
console.log("undefined == null : ", undefined == null); // return true. becouse of the consider as object/variable with no value
console.log("1 == '' : ", 1 == ""); // return false becouse of empty string converted into number as 0.
console.log("0 == '' : ", 0 == ""); // return true
console.log("'true' == true : ", "true" == true); // return false. Becouse of js first convert true to number(true = 1).
console.log("0 < true : ", 0 < true); // return true
console.log("'banana' < 'mango' : ", "banana" < "mango"); // return true. b is before m in alphabetical order
console.log("mango < melon"); // return true. second letter a leser than e.

//  FALSEY VALUES EXAMPLES
var testThis;
// return false.
if (testThis) {
  console.log("testThis is in if statement : true");
} else {
  console.log("testThis is in if statement : false");
}

let element = document.getElementById("doesNotExist");
//return false
if (element) {
  console.log("Element that does not existed is true in if statement.");
} else {
  console.log("Element that does not existed is false in if statement.");
}

// return false
if (0) {
  console.log("Zero is true in if statement.");
} else {
  console.log("Zero is false in if statement.");
}

//return false
if ("") {
  console.log("Empty string is true in if statement.");
} else {
  console.log("Empty string is false in if statement.");
}

if (NaN) {
  console.log("NaN in if statement is true.");
} else {
  console.log("NaN in if statement is false.");
}

// TRUTHY VALUES EXAMPLES
if ([]) {
  console.log("Empty array in if statement is true");
} else {
  console.log("Empty array in if statement is false");
}

if ({}) {
  console.log("Empty object in if statement is true.");
} else {
  console.log("Empty object in if statement is false");
}

let ExistElement = document.getElementById("description");
if (ExistElement) {
  console.log("Existed element in if statement is true");
} else {
  console.log("Existed element in if statement is false.");
}

if (1) {
  console.log("1 is true in if statement.");
} else {
  console.log("1 is false in if statement.");
}

let str1 = "one";
if (str1) {
  console.log("string in if statement is true.");
} else {
  console.log("string in if statement is false");
}

let emot = "XXoxOO";
let hugs = 0;
let kisses = 0;

emot = emot.trim();
emot = emot.toUpperCase();

for (let i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === "X") {
    hugs++;
  } else {
    kisses++;
  }
}
console.log("kisses : " + kisses + " and Hugs : " + hugs);

// JS convert strings sometimes to objects (temporaily)
let name = "John";
// here it is  consider as a string/primitive
let fullName = name + " smith";
console.log("Fullname : ", fullName);
// Here it is temporat=rily convert to object
let count = name.length;
console.log("length of  name : ", count);

// INDEXOF METHOD
let phrase = "The cat in the hat";
let index = phrase.indexOf("cat");
console.log("In the string 'cat' starting at index : ", index);

let indexWith2Args = phrase.indexOf("the", 5); // it search from 5th index for 'the'
console.log("First occuarance of 'the' is after 5th index : ", indexWith2Args);
console.log("index of dog in the given string :", phrase.indexOf("dog"));

// SUBSTRING METHOD
console.log("Substring is : ", phrase.substring(4, 7)); // return 'cat'
console.log("substring with only 1 arg : ", phrase.substring(4)); // return 'cat in the hat'

// SPLIT METHOD
console.log(
  "split the string using split method with an argument empty string(' ') : ",
  phrase.split(" ")
);

function duck(sound) {
  this.sound = sound;
  this.quack = function() {
    console.log(this.sound);
  };
}

let toy = new duck("quack quack");
toy.quack();
console.log("typeof toy : ", typeof toy);
console.log("typeof duck : ", typeof duck);
console.log("toy instance of duck ? : ", toy instanceof duck);

let task = null;
console.log("type of null : ", typeof task);

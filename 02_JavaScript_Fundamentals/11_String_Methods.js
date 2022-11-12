const firstName = "john johnsons";
const secondName = "smith";
let name = "";
const age = 33;
name = firstName + secondName;

// concatenation
name = firstName + " " + secondName;

// append
name = "steve ";
name += "Smith";
let val = "I am " + firstName +" and I am " + age +" old.";
console.log(val);
// console.log(name);

// Escaping
val = "That's awesome, i can't wait"; // use double quotes method
val = 'That\'s awesome, i can\'t wait';  // backslash method

// METHODS

// length
val = firstName.length;

// concat
val = firstName.concat(" ",secondName);

// toUppercase
val = val.toUpperCase();

// find Nth index letter
val = firstName[0];


// indexof()
val = firstName.indexOf(6); // return -1 there is no charector 6 in firstName
val = firstName.indexOf('j'); // return 0
val = firstName.lastIndexOf('j'); // return 5 becouse last j is in 5th index

// CharAt()
val = firstName.charAt('3'); // return n 3rd index character is n

// to get last char
val = firstName.charAt(firstName.length-1);

// substring()
val = firstName.substring(0,3) // return joh

// slice()
val = firstName.slice(0,3); // return joh
val = firstName.slice(-3); // return last 3 letters. retuen ons

// spilt()
const str="This is Sara from india";
val = str.split(' ');
const str2 = "web design,graphic design, programming";
val = str2.split(',')

// replace()
val=firstName.replace('john','michael');

// includes
val=str.includes('Sara'); //return  true

console.log(val);
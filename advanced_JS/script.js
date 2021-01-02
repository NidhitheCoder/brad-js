// exercise :1
// Write a program to check two numbers  and return true
//  if one of the number is 100 or if the sum of the two numbers is 100.
const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isEqualTo100(0, 100));
console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(10, 00));
console.log(isEqualTo100(48, 52));

// Exercise : 2
// Write a javascript program to get the extension of a filename

const getFileExtension = str => str.slice(str.lastIndexOf("."));
console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));

// Exercise : 3
// Write a javascript program to replace every charactor
//  in a given  string  with the character following it in the alphabet.

//  String.fromCharCode
// CharCodeAt

const moveCharsForward = str =>
  str
    .split("")
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
console.log(moveCharsForward("abcd"));
console.log(moveCharsForward("z"));
console.log(moveCharsForward("Smith"));

// Exercise : 4
// Write a javascript program to get the current date.
// expected output :
// mm-dd-yyyy,mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const formatDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const months = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${days} /${months}/${year}`;
};

console.log(formatDate());

// Exercise : 5
// Write a javascript program to create a new string adding 
// "New!" infront of a given string. If the given string Begin
//  with "New!" already then return the original string

const addNew = (str) =>str.indexOf('New!') ? `New! ${str}`: str;
console.log(addNew('Office New!'));
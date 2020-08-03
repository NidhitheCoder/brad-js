
var description = document.getElementById("description1");

if (description === null) {
  console.log("Something deosn't exist..");
}
let a = 0/0;
console.log("a : ",a); // return NaN
if(isNaN(a)) {
    console.log("a is NaN : ",a);
}
console.log("type of a : ",typeof a);
console.log("10 in isNaN : " ,isNaN(10)); // return false
console.log("name in isNaN : ",isNaN("name")); // return true
console.log("10/0 :",10/0); // return infinity
console.log("NaN === NaN : ",NaN === NaN); // return false
console.log("null === null : ",null === null); // return true
console.log("undefined === undefined : ",undefined === undefined); // return true
console.log("infinity-infinity : ",Infinity - Infinity);
let testMe = 99;
console.log("testMe == 99 : " ,testMe == 99); // return true
console.log("textMe == '99' : ",testMe == "99"); // return true
// number to string
console.log("testMe == 'vannila' : ",testMe == "vannila"); // return false becouse of vannila convert to number then get NaN.

// number to boolean 
console.log("1 == true : ",1 == true); // return true. true converted to number then value become 1.
console.log("6 == true : ",6 == true); // return false becouse of 6 not equal to 1(true).

// boolean to string 
console.log("'1' == true : ","1" == true); // return true
console.log("'6' == true : ", "6" == true); // return false
console.log("undefined == null : ",undefined == null); // return true. becouse of the consider as object/variable with no value
console.log("1 == '' : ",1 == ""); // return false becouse of empty string converted into number as 0.
console.log("0 == '' : ", 0 == "");  // return true
console.log("'true' == true : ", "true" == true ); // return false. Becouse of js first convert true to number(true = 1).
console.log("0 < true : ",0 < true); // return true
console.log("'banana' < 'mango' : ","banana" < "mango"); // return true. b is before m in alphabetical order
console.log("mango < melon"); // return true. second letter a leser than e.
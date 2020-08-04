# Chapter 7 : Types, equality, conversions and all that jazz.

- There are 2 groups of type in javascript : primitive and objects
- typeof helps to findout type of variables
  eg:- typeof name // name is a variable name;
  - undefined means that a variable hasn't yet been initialized to a value.
- null means "no object"
- null is indended to represent an object that isn't there.
- javascript uses the value NaN, More commonly known as "Not a Number", to represent numeric results that, well, can't be represented.
- NaN is the only value in javascript that isn't equal to itself(NaN != NaN).
- NaN is actually a number that can't be represented.
- Type of NaN is Number.
- The infinity value in javascript represents all numbers that exceeded the upper limit on computer floating point numbers,which is 1.7976931348623157E+10308 (or -1.7976931348623157E+10308
  for -Infinity).
- two values are strictly equal(===) only if they have the same type and the same value
- 5 falsey values in javaScript : null,undefined,0, "" ,NaN
- Sometimes javascript temporarily convert strings to objects.
- charAt method of string helps to findout letter at a given index.
  eg: let name ="John";
  let letterH = name.charAt(2); //return h

##### indexOf method

- indexOf method takes a string as an argument and return the index of the first character of the first occurance of that argument in the string.

##### substring method

- When the given string in the indexOf method is not in the main string it return -1.
  Substring method of string have 2 indices, and it will extract and return the string contained within them.

##### split method

- The split method takes a character that acts as a delimeter, and breaks the string into parts based on delimeter.
- split method return an array.

* there more string methods in js like toLowerCase,replace,lastIndexOf,concat,match,slice,trim,substingtoUpperCase etc..
* slice : Returns a new string that has part of the original string removed.
* match : Saerch for a matches in a string using regular expressions.
* replace :Find substring and replace them with another string.
* lastIndexOf : Just like index of, but find the last not the first, occurance.
* instanceOf : this method check an object is an instance of a function or not.

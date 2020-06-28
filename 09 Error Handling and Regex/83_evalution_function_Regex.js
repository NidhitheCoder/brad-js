let re;
re = /hello/;
re = /hello/i; // i = case sensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec return result in an array or null
// const result = re.exec('hello world');
//  // ^ it return an array with 'hello',index=0(becouse of 
// // hello starting from 0th index),'hello world'

//  const result = re.exec('brad hello world')
//  // ^ return an array with 'hello',index=5,'hello world'

//  const  result = re.exec('hi world');
// //  ^ return null becouse there is no match for expression
// // 'hello' inside the string

// const result = re.exec('helloww world');
// // ^ return an array 'hello'.index=0,'helloww world'
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() - Returns true of false
// const result = re.test('Hello');
// console.log(result); // return false without i in expression
// // part otherwise it will be true;

// //  match() - Return result array or null
// const str ="Hello there";
// const result = str.match(re);
// //^ if str = "Hello world" return an array with 'hello',index-0,'hello world'
// //  else str = "hell there" return null becouse of  there is no match for hello
// console.log(result);

// // search() - Return index of first match if not found return -1
// const str = 'Hello';
// const result = str.search(re); // string is Hello  then return 0 string is brad
// // hello then it return 5
// console.log(result);

//  replace () - return new string with some or all matches of pattern

const str = "Hello there";
const newStr = str.replace(re, "hi");
console.log(newStr);

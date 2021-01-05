// Source Edureka youtube channel :-)

// Advanced working with functions 

// #1 Recursion

const pow = (x,n)=>{
    return n === 1 ? x : x* pow(x,n-1);
}

console.log(pow(2,4)); //16
console.log(pow(14,1));

// #2 Closure
const add = (() => {
    let counter = 0;
    return () => counter+=1;
})();

console.log(add());
console.log(add());
console.log(add());

// #3 The "New function"
let sum = new Function('a','b', 'return a+b');
console.log(sum(5,2));

// #4 Arrow Function
 hello = () => {
      document.getElementById("demo").innerHTML += this;
};

// window object call the function
window.addEventListener('load',hello);
// Button object call function
document.getElementById("btn").addEventListener('click',hello);

// #5 Rest and spread Operator 
// rest operator
const fun = (...input) =>{
    let sum = 0;
    for(let i of input){
        sum +=i;
    }
    return sum;
}

console.log(fun(10,20,30,40));
console.log(fun(1,2,4));
console.log(fun(100,20,3));

// spread operator
let arr1 =[1,2,3];
let arr2 = [ 5,6,7];
let arr = [...arr1,...arr2];
console.log(arr);

// #6 Global object
alert("Hello");
// similer to 
window.alert("Hello");

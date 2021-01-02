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
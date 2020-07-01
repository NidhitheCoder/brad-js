// // ?destructuring assignment 
// let a,b;
// [a,b] = [100,200];
// console.log(b);
// console.log(a);

// // res pattern
// [a,b, ...rest] = [100,200,300,400,500];
// console.log(rest); // return 3 values 300 400 and 500
// [a,b,c, ...rest] = [100,200,300,400,500];
// console.log(rest); // return 400 and 600. 300 is the value of c now
// ({a,b} = {a:100,b:200,c:300,d:400,e:500})
// console.log(a,b);
// ({a,b, ...rest} = {a:100,b:200,c:300,d:400,e:500}); // destructuring assignment
// console.log(rest);

// // // array destructuring 
// // const people = ['john','julie','jack'];
// // const [person1,person2,person3] = people;
// // console.log(person1,person2,person3);

// // parse array returned from function 
// function getPeople() {
//     return ['john','meth','mike'];
// }
//  let person1,person2,person3;
//  [person1,person2,person3] = getPeople();
//  console.log(person1,person2,person3);

// object destructuring
const person = {
    name : 'john due',
    age : 32,
    city : 'Miami',
    gender : 'Age',
    sayHello : function() {
        console.log('hello');
    }
}

// // old ES5 way
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

// new es6 destructuring 
const {name,age,city,sayHello} = person;
console.log(name,age,city);
sayHello();

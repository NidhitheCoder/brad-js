// // const brad = {
// //     name : "brad",
// //     age : 30
// // }
// // console.log(brad);
// // console.log(brad.name);

// //  Person contructor
// function Person(name,age) {
//     // this.name="brad";
//     this.name = name;
//     this.age = age;
//     // console.log(this);
// }

// // console.log(this);
// // this.alert(1);
// const brad = new Person("brad",33);
// const john = new Person("john",23);
// // console.log(brad);
// // console.log(john);
// console.log(john.age);

function Person(name,dob) {
    this.name =  name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970);
    }
}

const brad = new Person('brad','1994-12-22');
 console.log(brad.calculateAge());
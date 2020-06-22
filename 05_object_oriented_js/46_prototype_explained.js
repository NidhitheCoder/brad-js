// Object.prototype
// person.prototype

// person constructor
function Person(firstName,lastName,dob) {
this.firstName = firstName;
this.lastName = lastName;
this.birthday = new Date(dob);
// this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
}
const john = new Person('John',"Due",'1983-12-12');
const mary = new Person('Mary','Johnson','1985-3-23');

// Calculate Age
Person.prototype.calculateAge = function() {
const diff = Date.now() - this.birthday.getTime();
const ageDate = new Date(diff);
return Math.abs(ageDate.getUTCFullYear() -  1970);
}


// Get Full Name
Person.prototype.fullName = function() {
    return `${this.firstName}  ${this.lastName}`;
}

// Get Married
Person.prototype.getMarried = function(newLastName) {
    this.lastName = newLastName;
}

console.log(john);
console.log(mary);
console.log(john.calculateAge());
console.log(mary.fullName());
mary.getMarried('smith');
console.log(mary.fullName());

console.log(mary.hasOwnProperty('firstName'));
 console.log(mary.hasOwnProperty('fullName')); //it return false becouse of fullname function is a protottype function its not own children property
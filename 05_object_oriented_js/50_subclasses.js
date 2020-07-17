class Person{
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
         return `hello welcome ${this.firstName}  ${this.lastName}`;
    }
}

class Customer extends Person {
constructor(firstName,lastName,phone,membership) {
super(firstName,lastName);
this.phone = phone;
this.membership = membership; 
}
static membershipCost () {
    return 500;
}
}

// create a new customer
const john = new Customer('John','Doe','878787555','Standard');
console.log(john);
console.log(john.greeting());
console.log(Customer.membershipCost());
console.log(Person.membershipCost()); // retunr type error becouse of membershipCost
                                    //  function is declared as static function inside Customer class

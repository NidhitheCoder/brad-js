// Person Constructor
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greetings
Person.prototype.greeting = function(firstName,lastName) {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John','Due');
console.log(person1.greeting());

// customer constructor
function Customer(firstName,lastName,phone,membership) {
    Person.call(this,firstName,lastName);

    this.phone = phone;
    this.membership = membership;
}

    // inherit the peson prototype method
    Customer.prototype = Object.create(Person.prototype);

    // make Customer.prototype  return Customer()
    Customer.prototype.constructor = Customer;

    // Customer geeting (replace Person's greeting function)
    Customer.prototype.greeting = function (){
        return `hello ${this.firstName} ${this.lastName} Welcome to our company`; 
    }

    // create customer
    const customer1 = new Customer('Tom','Smith','756767757','Standard');
    console.log(customer1);
    console.log(customer1.greeting());
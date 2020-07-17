const PersonPrototypes = {
greeting :function() {
    return `hello there ${this.firstName}  ${this.lastName}`;
},
getMarried : function(newLastName) {
    this.lastName = newLastName;
}
}

const mary = Object.create(PersonPrototypes);
mary.firstName ='Mary';
mary.lastName = "Smith";
mary.age =30;
console.log(mary);
mary.getMarried('Thompson')
console.log(mary.greeting());

// create anouther
const brad = Object.create(PersonPrototypes,{
    firstName : {value:'brad'},
    lastName : {value:'freddy'},
    age : {value: 34}
});

console.log(brad);
console.log(brad.greeting());
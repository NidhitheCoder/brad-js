# Chapter 13 Extra strength objects

### Prototypes
- Javascript object system uses prototypal inheritance
- Javascript objects can inherit properties and behaviour from other objects.
- Javascript uses what is known as prototypal ineritance, and the object you are inheriting behaviour from is called the prototype.
- Prototypes are dynamic.
- syntax:
  {constructorName}.prototype.{methodName/propertyName} = {value};

###

- We can call a constructor inside another constructor using call method
  eg: funciton ShowDog(name,breed,weight,handler) {
  Dog.call(this,name,breed,weight);
  this.handler = handler;
  }

  - In the Above example the ShowDog is a constructor
    and dog is an another constructor called inside the ShowDog constructor.
  - We are assign the name,weight,breed already in dog constructor then we can call it using call method inside the ShowDog constructor.

- isPrototypeOf is a method you can use to findout if an object is a prototypeof anouther object.s

### Do not override

- constructor
- hasOwnProperty
- isPrototypeOf
- propertyIsEnumarable

### Okay to override

- toString
- toLocalString
- valueOf

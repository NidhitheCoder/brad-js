# Chapter 5 : Understanding Objects

#### Objects
- An object is a set of properties/collection of properties.
- Objects enclose by curly braces
- Object have properties and their own values these are separated bu colon(:).mean they are pair.
- Properties are separated by coma(,).
- If you are use a string with space as property then you need to qusates around property name.
- No multiple properties in an object can have same name.
- eg :-
    let car = {
        color:"green",
        year :1997,
        convertable : true
    }

- you can access an object value by :- objectName.propertyName and objectName["PropertyName"]
    eg :-
        1. car.color // return green
        2. car["color"] // return green

- To change value of a property
    car.year = 2000; // in some cases this may be illegal
- To add new property. 
    objectName.propertyName = value  
    
    // if the property is existing in object then the value of the property will be updated.

    eg:-
    car.model = "CD 123";

- To delete a property in an object.
    delete objectName.propertyName;

    eg:-
    delete car.model;

- A variable can hold referance of an object when we assigned.
- we can store functions also inside an object
    eg :-
    let car = {
        name : "chevy"
        drive : function () {
            console.log("Running")
        }
    }

- This example drive is the function name.
- A function inside an object is called method.
- to call a funciton inside an object  we can use objectName.functionPropertyName();
    eg:-
        car.drive();

#### This Keyword
- 'This' method is that whenever a method is called, in the body of that method you can count on this to be assigned to the object whose method was called.

#### For in
    for (let variableName in object/array) {
        // statement block
    }



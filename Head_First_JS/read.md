# Chapter 5 : Understanding Objects

#### Objects
- Object is a collection of datas
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

- you can access an object value by :- objectName.propertyName.
    eg :-
        car.color // return green

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

- a variable can hold referance of an object when we assigned.
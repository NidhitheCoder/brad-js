// let taxi = {
//     make : "Webvillie Motors",
//     model: "Taxi",
//     year : 1955,
//     color : "Yellow",
//     passangers : 4,
//     convertible : false,
//     milage : 281341,
//     started:false,
//     start : function(){this.started = true;},
//     stop : function(){this.stop = true;},
//     drive : function(){
//         //drive code here
//     }
// };

// function Duck(type,canFly){
//     this.type = type;
//     this.canFly = canFly;
// }

// function Dog(name,breed,weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.bark = function(){
//         if(this.weight > 25){
//             alert (this.name + " says woof!");
//         } else {
//             alert(this.name + " says yip.!");
//         }
//     }
// }

// let fido = new Dog("Fido","Mixed",38);
// console.log(typeof fido);
// let fluffy = new Dog("Fluffy","Puddle",30);
// let spot = new Dog("Spot","Chihuahua",10);
// let dogs = [fido,fluffy,spot];

// for(let i = 0;i< dogs.length;i++ ){
//     let size = "Small";
//     if(dogs[i].weight > 10){
//         size = "Large";
//     }
//      console.log("Dog: " + dogs[i].name
//      + " is a " + size + " " + dogs[i].breed);
//      dogs[i].bark();
// }

// function Coffee(roast, ounces) {
//   this.roast = roast;
//   this.ounces = ounces;
//   this.getSize = function() {
//     if (this.ounces === 16) {
//       return "large";
//     } else if (this.ounces === 12) {
//       return "medium";
//     } else if (this.ounces === 8) {
//       return "small";
//     }
//   };
//   this.toString = function() {
//     return "You've ordered a " + this.getSize() + " " + this.roast + " coffee.";
//   };
// }

// let houseBlend = new Coffee("House Blend", 12);
// console.log(houseBlend.toString());

// let darkRoast = new Coffee("Dark Roast", 16);
// console.log(darkRoast.toString());

// // with more parameters
// function Car(make, model, year, color, passengers, convertible, milage) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.passengers = passengers;
//   this.convertible = convertible;
//   this.milage = milage;
//   this.started = false;
//   this.start = function() {
//     this.started = true;
//   };
//   this.stop = function() {
//     this.started = false;
//   };
//   this.drive = function() {
//     if (this.started) {
//       console.log(this.make + " " + this.model + " goes zoom zoom");
//     } else {
//       console.log("Start the engine first");
//     }
//   };
// }

// let chevy = new Car("Chevy", "Bill air", 1957, "red", 2, false, 1021);
// let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
// let testCar = new Car(
//   "Webville Motors",
//   "Test Car",
//   2014,
//   "marine",
//   2,
//   true,
//   21
// );
// console.log(chevy);
// console.log(cadi);
// console.log(testCar);
// let cars = [chevy, cadi, testCar];

// for (let i = 0; i < cars.length; i++) {
//   cars[i].start();
//   cars[i].drive();
//   cars[i].drive();
//   cars[i].stop();
// }

// // with object parameters
// function Car(params) {
//   this.make = params.make;
//   this.model = params.model;
//   this.year = params.year;
//   this.color = params.color;
//   this.passengers = params.passengers;
//   this.convertible = params.convertible;
//   this.milage = params.milage;
//   this.started = false;
//   this.start = function() {
//     this.started = true;
//   };
//   this.stop = function() {
//     this.started = false;
//   };
//   this.drive = function() {
//     if (this.started) {
//       console.log(this.make + " " + this.model + " goes zoom zoom");
//     }
//   };
// }

// let chevy = {
//   make: "chevy",
//   model: "Bill Air",
//   year: 1957,
//   color: "red",
//   passengers: 2,
//   convertible: false,
//   milage: 1021
// };

// let test = {
//     make:"Webville Motors",
//     model : "Test car",
//     year:2013,
//     color:"marine",
//     passengers:2,
//     convertible:true,
//     milage:21
// };

// // both chevy and test car are the insatnce of car class or constructor
// let chevyCar = new Car(chevy);
// let testCar = new Car(test);

// // console.log(chevyCar);
// // console.log(testCar);
// console.log(typeof chevyCar);

// if(chevyCar instanceof Car){
//   console.log("chevy is a car");
// };

// function dogCatcher(dog) {
//   if (dog instanceof Dog) {
//     return true;
//   }
//   return false;
// }

// function Cat(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this, (weight = weight);
// }

// let meaw = new Cat("Meaw", "Siamese", 10);
// let wisker = new Cat("Wiskers", "Mixed", 12);

// let fido = { name: "fido", breed: "Mixed", weight: 38 };

// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
//   this.bark = function() {
//     if (this.weight > 25) {
//       console.log(this.name + " says Woof..!");
//     } else {
//       console.log(this.name + " says yip...!");
//     }
//   };
// }

// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [meaw, wisker, fido, fluffy, spot];

// for (let i = 0; i < dogs.length; i++) {
//   if (dogCatcher(dogs[i])) {
//     console.log(dogs[i].name + " is a dog.");
//   } else {
//     console.log(dogs[i].name + " is not a dog.");
//   }
// };

// spot.owner = "Bob";
// delete  spot.weight;
// console.log(dogs);

// spot.run = function(){
//  console.log("So happy.. its running");
// }

// console.log(wisker.run());

// let now = new Date();
// console.log(now);
// let dateString = now.toString();
// let theYear = now.getFullYear();
// let dayOfTheWeek = now.getDay();
// console.log(dateString);
// console.log(theYear);
// console.log(dayOfTheWeek);
// let birthday = new Date("May 1 1993");
// console.log(birthday);

// // creating empty array
// let emptyArray = new Array();
// console.log(emptyArray);

// // add an element to the array
// emptyArray[0] = 99;
// console.log(emptyArray);

// we can specify array size when creating an array like this. 
// we can easly added more number of elements in future
let arr2 = new Array(3);
//  add items to specific places
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
//   trying to add an extra element to  fixed size array
arr2[3] = 4;

console.log(arr2);
console.log(arr2.reverse());
console.log(arr2.join("-"));
console.log(arr2.every(function(x){
  return ((x%2) !== 1);
}));

// literal syntax for creating arrays
let arrNew = [1,2,3,4,5];
console.log(arrNew);

// constructor using another way to creating arrays.
let array1 = new Array("a","b","c");
console.log(array1);

let n = getArrayWidgetFromDatabase();
let widgets = new Array(n);
for (let i =0 ;i< widgets.length;i++){
  widgets[i] = getDatabsaeRecord();
}
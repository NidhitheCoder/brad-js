
// function Dog(name, weight, breed) {
//   this.species = "Canine";
//   this.name = name;
//   this.weight = weight;
//   this.breed = breed;
//   // this.bark = function() {
//   //   if (this.weight > 10) {
//   //     console.log("Woof woof");
//   //   } else {
//   //     console.log("yip yip");
//   //   }
//   // };
// }

// let fido = new Dog("fido", 8, "mixed");
// let spoofy = new Dog("Spoofy", 8, "chihuahua");
// spoofy.bark = function bark() {
//   console.log("woof woof by spoofy");
// };

// Dog.prototype.run = function() {
//   console.log("Running");
// };

// Dog.prototype.wag = function() {
//   console.log("Wag");
// };

// Dog.prototype.bark = function() {
//   if (this.weight > 10) {
//     console.log("Woof Woof");
//   } else {
//     console.log("Yip Yip");
//   }
// };

// console.log(fido);
// console.log(spoofy);
// fido.bark();
// spoofy.bark();
// fido.run();
// fido.wag();

// // Dog.prototype.sit = function() {
// //   console.log(this.name + " is now sitting.");
// // };

// // spoofy.sit();

// // An intersting way for implementing sit method
// Dog.prototype.sitting = false;

// Dog.prototype.sit = function() {
//   if (this.sitting) {
//     console.log(this.name + " is already sitting.");
//   } else {
//     this.sitting = true;
//     console.log(this.name + " is now sitting.");
//   }
// };

// // spoofy.sit();
// // spoofy.sit();

// console.log(spoofy.hasOwnProperty("sitting"));
// spoofy.sitting = true;
// console.log(spoofy.hasOwnProperty("sitting"));
// console.log(fido.sitting);
// // spoofy.sit();
// // fido.sit();

// function ShowDog(name, weight, breed, handler) {
//   // this.name = name;
//   // this.weight = weight;
//   // this.breed = breed;
//   Dog.call(this, name, breed, weight);
//   this.handler = handler;
// }
// console.log(ShowDog);
// ShowDog.prototype = new Dog();

// ShowDog.prototype.leauge = "Webville";
// ShowDog.prototype.stack = function() {
//   console.log("slack");
// };

// ShowDog.prototype.bait = function() {
//   console.log("Bait");
// };

// ShowDog.prototype.gait = function(kind) {
//   console.log(kind + "ing");
// };

// ShowDog.prototype.groom = function() {
//   console.log("Groom");
// };

// // let scotty = new ShowDog("Scotty", "Scotty terrier", 15, "Cookie");

// // scotty.stack();
// // scotty.bait();
// // scotty.bark();
// // console.log("leagues : " + scotty.leauge);
// // console.log("species : " + scotty.species);

// if (fido instanceof Dog) {
//   console.log("Fido is a dog");
// }

// if (fido instanceof ShowDog) {
//   console.log("Fido is a Showdog");
// }

// let scotty = new ShowDog("scotty", "scotty terriar", 15, "cookie");
// if (scotty instanceof Dog) {
//   console.log("Scotty is a dog");
// }

// if (scotty instanceof ShowDog) {
//   console.log("Scotty is also a showdog also");
// }

// console.log("Fido is a contstructor is " + fido.constructor);
// console.log("Scotty constructor is " + scotty.constructor);

// let toy = new Dog("Toy", 12, "no breed");
// console.log(toy.toString());
// Dog.prototype.toString = function() {
//   return this.name + " is included in " + this.breed;
// };
// console.log(toy.toString());

// function Robot(name, year, owner) {
//   this.name = name;
//   this.year = year;
//   this.owner = owner;
// }

// Robot.prototype.maker = "ObjectsRUs";
// Robot.prototype.speaker = function() {
//   console.log("I am Speaking");
// };

// Robot.prototype.makeCoffee = function() {
//   console.log(this.name + " making coffee for you");
// };

// Robot.prototype.Blinklights = function() {
//   console.log(this.name + " blinking lights");
// };

// var robby = new Robot("Robby", 1956, "Dr.Morbius");
// var rosy = new Robot("Rossie", 1992, "Dr.John");

// rosy.cleanHouse = function() {
//   console.log("Rossie cleaning the house");
// };

// console.log(
//   robby.name +
//     " Was made by " +
//     robby.maker +
//     " in Year " +
//     robby.year +
//     " and owned by " +
//     robby.owner
// );

// console.log(
//   rosy.name +
//     " was made by " +
//     rosy.maker +
//     " in year " +
//     rosy.year +
//     " and owned by " +
//     rosy.owner
// );
// rosy.cleanHouse();

// Robot.prototype.errorMessage = "all system go";
// Robot.prototype.reportError = function() {
//   console.log(this.name + " says " + this.errorMessage);
// };
// Robot.prototype.spillWater = function() {
//   this.errorMessage = "I appear to have a short circuit!";
// };

// rosy.reportError();
// robby.reportError();
// robby.spillWater();
// rosy.reportError();
// robby.reportError();

// console.log(rosy.hasOwnProperty("errorMessage"));
// console.log(robby.hasOwnProperty("errorMessage"));

// function Game() {
//   this.level = 0;
// }

// Game.prototype.play = function() {
//   // Player plays game here
//   this.level++;
//   console.log("Welcome to " + this.level);
//   this.unlock();
// };

// Game.prototype.unlock = function() {
//   console.log(robby.name + " Is blasting you with laser beams");
// };

// let game = new Game();
// while (game.level < 42) {
//   game.play();
// }

// function SpaceRobot(Name, year, owner, homePlanet) {
//   this.name = name;
//   this.year = year;
//   this.owner = owner;
//   this.homePlanet = homePlanet;
// }

// SpaceRobot.prototype = new Robot();
// SpaceRobot.prototype.speak = function() {
//   console.log(this.name + " says sir, If I may venture an openion!");
// };

// SpaceRobot.prototype.pilot = function() {
//   console.log(this.name + " says Trusters? Are they important?");
// };

// let c3po = new SpaceRobot("c3po", 1977, "Luke Skywalker", "Tatooine");
// c3po.speak();
// c3po.pilot();
// console.log(c3po.name + " was made by " + c3po.maker);

// let simon = new SpaceRobot("simon", 2009, "Carla Diana", "Earth");
// simon.makeCoffee();
// simon.Blinklights();
// simon.speak;

// String.prototype.cliche = function() {
//   let cliche = ["lock and load", "touch base", "open the kimono"];
//   for (let i = 0; i < cliche.length; i++) {
//     let index = this.indexOf(cliche[i]);
//     if (index >= 0) {
//       return true;
//     }
//   }
//   return false;
// };

// let sentances = [
//   "I'll send my car around to pick you up.",
//   "let's touch base in the morning and seee where we are",
//   "we don't want to open the kimono ,we just want to inform them."
// ];

// for(let j =0 ; j < sentances.length;j++){
//   let phrase = sentances[j];
//   if(phrase.cliche()){
//     console.log("CLICHE ALERT: ",phrase);
//   }
// };

String.prototype.palindrome = function() {
  let revArr = this.split("")
    .reverse()
    .join();
  let letterArr = this.split("").join();

  if (letterArr === revArr) {
    return true;
  }
  return false;
};

let str = "malayalam";
console.log(str.palindrome());

function meditate () {
  console.log("Everything is an object");
}

alert(meditate instanceof Object);
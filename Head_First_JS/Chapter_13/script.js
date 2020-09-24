function Dog(name, weight, breed) {
  this.species = "Canine";
  this.name = name;
  this.weight = weight;
  this.breed = breed;
  // this.bark = function() {
  //   if (this.weight > 10) {
  //     console.log("Woof woof");
  //   } else {
  //     console.log("yip yip");
  //   }
  // };
}

let fido = new Dog("fido", 8, "mixed");
let spoofy = new Dog("Spoofy", 8, "chihuahua");
spoofy.bark = function bark() {
  console.log("woof woof by spoofy");
};

Dog.prototype.run = function() {
  console.log("Running");
};

Dog.prototype.wag = function() {
  console.log("Wag");
};

Dog.prototype.bark = function() {
  if (this.weight > 10) {
    console.log("Woof Woof");
  } else {
    console.log("Yip Yip");
  }
};

console.log(fido);
console.log(spoofy);
fido.bark();
spoofy.bark();
fido.run();
fido.wag();

// Dog.prototype.sit = function() {
//   console.log(this.name + " is now sitting.");
// };

// spoofy.sit();

// An intersting way for implementing sit method
Dog.prototype.sitting = false;

Dog.prototype.sit = function(){
  if(this.sitting){
    console.log(this.name + " is already sitting.");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting.");
  };
};

// spoofy.sit();
// spoofy.sit();

console.log(spoofy.hasOwnProperty("sitting"));
spoofy.sitting = true;
console.log(spoofy.hasOwnProperty("sitting"));
console.log(fido.sitting);
// spoofy.sit();
// fido.sit();


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
// };

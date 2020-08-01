let car = {
  model: "GM Cadillac",
  year: 1955,
  color: "Tan",
  "is convertable": false,
  passangers: 5,
  milage: 12892
};

// let carColor = car.color;
// if (carColor === "Tan") {
//   console.log("yes it is nice");
// }
// console.log(car.year);
// car.year = 1990;
// console.log(car.year);
// car.weight = 1200;
// console.log(delete car.weight);
// console.log(car)

// for(let i =0 ; i < car.passangers ; i++) {
//     console.log("Seates available");
// }

function preEqual(car) {
  if (car.milage > 10000) {
    return false;
  }
  if (car.year > 1960) {
    return false;
  }
  return true;
}
let result = preEqual(car); 

if(result) {
    console.log("You gotta checkout this")
}
// let dog = {
//     name:"fido",
//     weight : 20.2,
//     age:4,
//     breed :"mixed",
//     activity:"fetch ball"
// }

// let bark
// if(dog.weight > 20) {
//     bark = "WOOF WOOF";
// } else {
//     bark = "woof woof";
// }

// let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
// console.log(speak);

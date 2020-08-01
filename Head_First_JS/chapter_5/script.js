let car = {
  model: "GM Cadillac",
  year: 1955,
  color: "Tan",
  "is convertable": false,
  passangers: 5,
  milage: 12000
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

// let taxy = {
//   name : "webvillie",
//   model : "GM",
//   milage : 23400,
//   year : 1950,
//   color : "yellow"
// }
// function preEqual(car) {
//   if (car.milage > 10000) {
//     return false;
//   }
//   if (car.year > 1960) {
//     return false;
//   }
//   return true;
// }
// let result = preEqual(taxy);

// if (result) {
//   console.log("You gotta checkout this " + taxy.year + " " + taxy.model);
// } else {
//   console.log("You should really pass the value " + taxy.year + " " + taxy.model);
// }

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

let fido = {
  name: "fido",
  weight: 48,
  breed: "mixed",
  loves: "walks"
};

// function lossWeight(dog,amount) {
//  dog.weight = dog.weight - amount;
// }

// lossWeight(fido,10);
// console.log(fido.name + " now weighs " + fido.weight);

// function getSecret(file,secretPassword) {
//   file.opened = file.opened + 1;
//   if(secretPassword === file.password) {
//     return file.contents
//   } else {
//     return "Invalid password..! no secret for you.."
//   }
// }

// function setSecret(file,secretPassword,secret) {
//   if(file.password === secretPassword) {
//     file.opened = 0;
//     file.contents = secret;
//   }
// }

// let superSecretFile = {
//   level : "Classified",
//   opened : 0,
//   password : 2,
//   contents : "Dr. Evel's next meeting is in detroit."
// }

// let secret = getSecret(superSecretFile,2);
// console.log(secret);

// setSecret(superSecretFile,2,"Dr.Evel's next meeting in philadelphia");
// secret = getSecret(superSecretFile,2);
// console.log(secret);

function makeCar() {
  let makes = ["chevy", "GM", "Fiat", "webville motors", "Tucker"];
  let models = ["cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
  let years = [1955, 1957, 1955, 1948, 1961];
  let colors = ["red", "tan", "blue", "yellow", "white"];
  let convertible = [true, false];

  let rand1 = Math.floor(Math.random() * makes.length);
  let rand2 = Math.floor(Math.random() * models.length);
  let rand3 = Math.floor(Math.random() * years.length);
  let rand4 = Math.floor(Math.random() * colors.length);
  let rand5 = Math.floor(Math.random() * 5) + 1;
  let rand6 = Math.floor(Math.random() * 2);

  let car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passangers: rand5,
    convertible: convertible[rand6],
    milage: 0,
    started: false,
    fuel: 0,
    start: function() {
      this.started = true;
    },
    stop: function() {
      this.started = false;
    },
    drive: function() {
      if (this.started) {
        if (this.fuel > 0) {
          console.log("Running");
          this.fuel = this.fuel - 1;
        } else {
          console.log("Out of fuel...!");
          this.stop();
        }
      } else {
        console.log("You need to start first");
      }
    },
    addFuel: function(amt) {
      this.fuel = this.fuel + amt;
    }
  };

  return car;
}

function displayCar(car) {
  console.log(
    "Your new car is a " + car.year + " " + car.make + " " + car.model
  );
}

let cartoSell = makeCar();
displayCar(cartoSell);
cartoSell.start();
cartoSell.drive();
cartoSell.addFuel(10);
cartoSell.start();
cartoSell.drive(0);
console.log(cartoSell);

// for (let prop in fido) {
//   console.log(prop);
//   console.log(fido[prop]);
// }

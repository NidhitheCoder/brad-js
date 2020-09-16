var passengers = [
  { name: "smith", paid: true, ticket: "First Class" },
  { name: "sara", paid: true, ticket: "Coach" },
  { name: "john", paid: true, ticket: "First Class" },
  { name: "alex", paid: false, ticket: "Coach" },
  { name: "chris", paid: true, ticket: "Premium Economy" }
];

function processPassengers(passengers, testFunction) {
  for (let i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
  return !passenger.paid;
}

// let allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//   console.log(
//     "The plane can't take off: We have passenger in the non-fly-list."
//   );
// }

// let allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//   console.log("The plane can take off: Not everyone has paid");
// }

function serveCustomer(passenger) {
  //   if (passenger.ticket === "First Class") {
  //     alert("Whould you like a cocktail or wine ?");
  //   } else {
  //     alert("Your choice is cola or water.");
  //   }

  //   createDrinkOrder(passenger);
  //   createDrinkOrder(passenger);

  let getDrinkOrderFunction = createDrinkOrder(passenger);
  let getDinnerOrderFUnction = createDinnerOrder(passenger);
  getDrinkOrderFunction();
  // get dinner order function
  getDinnerOrderFUnction();
  getDrinkOrderFunction();
  // show movie
  getDrinkOrderFunction();
  // pick up trash
}

function createDrinkOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === "First Class") {
    orderFunction = function() {
      console.log("Whould you like a cocktail or wine ?");
    };
  } else if (passenger.ticket === "Premium Economy") {
    console.log("Would you like cola,water or wine?");
  } else {
    orderFunction = function() {
      console.log("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  let orderFunction;
  if (passenger.ticket === "First Class") {
    orderFunction = function() {
      console.log("Whould you like chicken or pasta ?");
    };
  } else if (passenger.ticket === "Premium Economy") {
    orderFunction = function() {
      console.log("Would you like a snack box or cheese plate ?");
    };
  } else {
    orderFunction = function() {
      console.log("Would you like peanuts or pretzels ?");
    };
  }
  return orderFunction;
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);

// function fun(echo){
//     console.log(echo);
// }

// fun("Hello");

// function boo(aFunction){
//  aFunction("boo");
// }

// boo(fun);

// console.log("fun : " , fun);

// fun(boo);

// let moreFun = fun;
// moreFun("hello again");

// function echoMaker(){
//     return fun;
// }

// let bigFun = echoMaker();
// bigFun("Is there an echo?");

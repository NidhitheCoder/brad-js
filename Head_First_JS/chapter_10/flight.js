
var passengers = [
  { name: "smith", paid: true,ticket:"First Class" },
  { name: "sara", paid: true, ticket:"Coach" },
  { name: "john", paid: true, ticket:"First Class"},
  { name: "alex", paid: false,ticket:"Coach" },
  { name: "chris", paid: true,ticket:"First class"}
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

let allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log(
    "The plane can't take off: We have passenger in the non-fly-list."
  );
}

let allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can take off: Not everyone has paid");
}

function serveCustomer(passenger) {
    if(passenger.ticket === "First Class") {
        alert("Whould you like a cocktail or wine ?");
    } else {
        alert("Your choice is cola or water.");
    }
}

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
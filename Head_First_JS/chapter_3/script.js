let dogName = "rover";
let dogWeight = 23;

//  code withour function starts
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}

dogName = "spot";
dogWeight = 13;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}

dogName = "spike";
dogWeight = 18;
if (dogWeight > 20) {
  console.log(dogName + " says WOOF WOOF");
} else {
  console.log(dogName + " says woof woof");
}
// code without function end

//  Code with function starts
function bark(name, weight) {
  if (weight > 20) {
    console.log(name + " says WOOF WOOF");
  } else {
    console.log(name + " says woof woof");
  }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 18);
//  Code with function end

function whatShallWeare(temp) {
  if (temp < 60) {
    console.log("Wear a jacket");
  } else if (temp < 70) {
    console.log("Wear a Sweater");
  } else {
    console.log("Wear a T-shirt");
  }
}

whatShallWeare(50);
whatShallWeare(80);
whatShallWeare(60);

function calculateArea(r) {
  let area;
  if (r <= 0) {
    return 0;
  } else {
    area = Math.PI * r * r;
    return area;
  }
}

let radious = 5.2;
let theArea = calculateArea(radious);
console.log("The area is " + theArea); // output is:- The area is 84.94866535306801
let avatar = "generic";
let skill = 1.0;
let pointPerLevel = 1000;
let UserPoints = 2008;

function getAvatar(points) {
  let level = points / pointPerLevel;
  if (level === 0) {
    return "Teddy Bear";
  } else if (level === 1) {
    return "Cat";
  } else if (level >= 2) {
    return "Gorilla";
  }
}

function updatePoints(bonus, newPoints) {
  let i = 0;
  while (i < bonus) {
    newPoints = newPoints + skill * bonus;
    i = i + 1;
  }
  number = 5; // for test globel scope of a variable inside a function without let/var/const keyword .
  return newPoints + UserPoints;
}

UserPoints = updatePoints(2, 100);
avatar = getAvatar(2112);
getAvatar(2112);
console.log(number);

function playTurn(player, location) {
  let points = 0;
  if (location == 1) {
    points = points + 100;
  }
  return points;
}
let total = playTurn("jai", 1);
console.log(points);
console.log("haii");

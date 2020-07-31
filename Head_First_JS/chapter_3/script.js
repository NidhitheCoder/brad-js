// let dogName = "rover";
// let dogWeight = 23;

// //  code withour function starts
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "spot";
// dogWeight = 13;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }

// dogName = "spike";
// dogWeight = 18;
// if (dogWeight > 20) {
//   console.log(dogName + " says WOOF WOOF");
// } else {
//   console.log(dogName + " says woof woof");
// }
// // code without function end

// //  Code with function starts
// function bark(name, weight) {
//   if (weight > 20) {
//     console.log(name + " says WOOF WOOF");
//   } else {
//     console.log(name + " says woof woof");
//   }
// }

// bark("rover",23);
// bark("spot",13);
// bark("spike",18);
// //  Code with function end


function whatShallWeare(temp) {
    if(temp < 60) {
console.log("Wear a jacket");
    } else if(temp < 70) {
        console.log("Wear a Sweater");
    } else {
        console.log("Wear a T-shirt");
    }
}

whatShallWeare(50);
whatShallWeare(80);
whatShallWeare(60);
// // FOR LOOP
// for(let i=0;i < 10;i++) {
//     // console.log("number " + i );
//     if(i === 2){
//         console.log(i + " is my favorite number");
//         continue; // iteration continue with next value of i
//     }

//     if(i === 5){
//         console.log("stop the loop");
//         break; // exit  loop when i become 5.
//     }
//     console.log("number " + i);
// }

// //  WHILE LOOP
let i = 0;
// while(i < 10){
//     console.log("number :" + i);
//     i++;
// }

// // DO WHILE LOOP
// do{
//     console.log("number " + i);
//     i++;
// }while( i < 10 )

//LOOP THROUGH ARRAY
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// // using for loop
// for(let i = 0; i < cars.length;i++) {
//     console.log(cars[i]);
// }

// // using while loop
// while(i < cars.length) {
//     console.log(cars[i]);
//     i++;
// }

// // using forEach loop
// cars.forEach(function(car){
//     console.log(car);
// });

// MAP
const users = [
  {id: 1,name: "jack"},
  {id: 2,name: "smith"},
  {id: 3,name: "sara"},
  {id: 4,name:"john"}
];
const ids = users.map(function(user){
return user.id;
})
// // console.log(ids);

// //  foreach with index and array itself
// cars.forEach(function(car,index,array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// FOR IN LOOP
const person={
    firstName : "steve",
    sName : "smith",
    age : 33
}

for (x in person){
    console.log(`${x} : ${person[x]}`);
}
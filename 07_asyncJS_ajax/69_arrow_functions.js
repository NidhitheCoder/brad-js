// const sayHello= function() {
//     console.log("Hello");
// }

// const sayHello = () => {
// console.log("Hello");
// }

// // online funcitons does not need functions
// const sayHello = () => console.log("Hello");

// sayHello();

// // online return
// const sayHello = () =>  "Hello";

// const sayHello = function () {
//     return "Hello";
// }

// // return object
// const sayHello = () => ({msg:"Hello"});

// console.log(sayHello());

// // only one parameter then no need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('julie');

// // multiple params need paranthesis
// const sayHello = (firstName,lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('mary','james');

// const users = ['nathan','lynn','jack'];

// // const nameLengths = users.map(function(user) {
// //     return user.length;
// // });

// // // shorter
// // const nameLengths = users.map((user) => {
// //     return user.length;
// // })

// // shortest
// const nameLengths =  users.map(user => user.length);

// console.log(nameLengths);
document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// Get Local Text File
function getText() {
  fetch("67_test.txt")
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get Local json file
function getJson() {
  fetch("67_posts.json")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // document.getElementById("output").innerHTML = data;
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get data from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = "";
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

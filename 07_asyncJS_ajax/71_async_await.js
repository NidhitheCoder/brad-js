// async function myFunc() {
//   //   return "hello";

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello"), 1000);
//   });

//   const error = false;
//   if (!error) {
//     const res = await promise; //wait until primise resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("something went wrong"));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
    // Await response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once it solved
    const data = await response.json();
    // only proceed second promise is proceed
    return data;
}

getUsers().then(users => console.log(users));

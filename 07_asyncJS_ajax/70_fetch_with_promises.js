const http = new EasyHTTP;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users');
// console.log(users);
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User data
const data = {
    name : 'john doe',
    username : 'john123',
    email : 'john.gmail.com'
}

// // create user
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


// // Update user
// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
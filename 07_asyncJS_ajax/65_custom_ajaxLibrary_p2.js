const http = new easyHTTP();

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts',function(err,posts) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// // // Get single posts
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// })

// create Data
const data = {
  title: "Custom Post",
  body: "this is a custom post"
};

// // create POST
// http.post("https://jsonplaceholder.typicode.com/posts", data,
// function( err,post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post ) {
// if(err) {
//     console.log(err)
// } else {
//     console.log(post);
// }
// });

// Delete Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

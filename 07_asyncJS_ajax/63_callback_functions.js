const posts = [
  { title: "Post One", body: "This is Post one" },
  { title: "Post Two", body: "This is Post two" }
];

// function createPost(post) {
// setTimeout(function() {
//     posts.push(post);
// },2000);
// }

// function getPosts(){
// setTimeout(function() {
// let output = '';
// posts.forEach(function(post) {
// output += `<li>${post.title}</li>`
// });
// document.body.innerHTML = output;

// },1000);
// }

// createPost({title:'Post three',body:'this is third post'});
// getPosts();// only retun post one and post two becouse of set timeout of getPosts function is lessthan create post

function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "this is third Post" }, getPosts);

const posts = [
  { title: "Post one", body: "This is Post one" },
  { title: "Post two", body: "This is Post two" }
];

function createPost(post) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error : Something wrong");
      }
      resolve();
    }, 2000);
  });
  //   setTimeout(function() {
  //     posts.push(post);
  //   }, 2000);
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

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });

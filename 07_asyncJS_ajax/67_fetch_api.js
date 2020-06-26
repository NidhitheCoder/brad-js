document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
document.getElementById("button3").addEventListener("click", getExternal);

// Get Local Text File
function getText() {
  fetch("67_test.txt")
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get Local json file
function getJson() {
  fetch("67_posts.json")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      // document.getElementById("output").innerHTML = data;
      let output = "";
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Get data from external API
function getExternal() {
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(user) {
          output += `<li>${user.login}</li>`
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}

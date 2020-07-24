// init github
const github = new Github();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", e => {
  // getinput text
  const userText = e.target.value;
  if (userText != "") {
    //    make http call
    github.getUser(userText).then(data =>{

        if(data.profile.message === "not Found") {
// show alert

        } else {
            console.log(data);
        }

    });
  } else {
    //   clear profile 
  }
});

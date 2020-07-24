class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //   show profile
  showProfile(user) {
    this.profile.innerHTML = `
            <div class="card card-body m-3">
              <div class="row">
                <div class="col-md-3 >
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Porfile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists : ${user.public_gists}</span>
                <span class="badge badge-success">Followers : ${user.followers}</span>
                <span class="badge badge-info">following : ${user.Following}</span>
                <br><br>
                <ul class="list-group">
                <li class="list-group-item">company : ${user.company}</li>
                <li class="list-group-item">Website/Blog : ${user.blog}</li>
                <li class="list-group-item">Location : ${user.location}</li>
                <li class="list-group-item">Member since : ${user.created_at}</li>
                </ul>
                </div>
              <div>
            <div>
            <h3 class="page-heading mb-3">Latest repos</h3>
            <div id="repos"></div>
            `;
  }

  // show user repos
  showRepos(repos) {
    let output = ""; 
    repos.forEach(repo => {
      output += `
    <div class="card card-body mb-2">
    <div class="row">
        <div class="col-md-6">
        <a href="${repo.html_url}" target="_blank">${repo.name}></a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary"> Stars : ${repos.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers : ${repo.watchers_count}</span>
        <span class="badge badge-info">Forks : ${repo.forms_count} </span>
        </div>
    </div>
    </div>
    `;
    });

    // output repos
    document.getElementById('repos').innerHTML = output;
  }

  //   show alert message
  showAlert(message, className) {
    // clear if any remaining alert
    this.clearAlert();
    // create div
    const div = document.createElement("div");
    // give a classname
    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parant
    const container = document.querySelector(".searchContainer");
    // get search box
    const searchBox = document.querySelector(".search");
    // insert alert
    container.insertBefore(div, searchBox);

    // clear alert when timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //   clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }
}

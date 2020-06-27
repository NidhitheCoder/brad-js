class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);
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
}

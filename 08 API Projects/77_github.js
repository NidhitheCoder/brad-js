class Github {
  constructor() {
    this.client_id = "9d4bd9d1d80ed208a93d";
    this.client_secret = "0f72c58a9e4408bce439fb0a69d2e32f6a226f15";
    this.repo_count = 5;
    this.repos_sort = "created : asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
            &client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}
    &sort=${this.repos_sort}&client_id=${this.client_id}
            &client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
console.log('heii')
    return {
      profile,
      repos
    };
  }
}

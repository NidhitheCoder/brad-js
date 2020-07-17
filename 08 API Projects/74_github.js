class Github {
  constructor() {
    (this.client_id = "9d4bd9d1d80ed208a93d"),
      (this.client_secret = "0f72c58a9e4408bce439fb0a69d2e32f6a226f15");
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}
      &client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      // profile:profile its same then only give one
      profile
    };
  }
}

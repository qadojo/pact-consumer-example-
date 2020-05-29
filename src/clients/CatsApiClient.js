const fetch = require("cross-fetch");

class CatsApiClient {
  constructor(uri = "") {
    this.uri = uri;
  }

  findCat(breed) {
    return fetch(`${this.uri}/cats`).then((response) => response.json());
  }
}

module.exports = CatsApiClient;

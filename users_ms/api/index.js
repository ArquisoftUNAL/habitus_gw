const { RESTDataSource } = require("@apollo/datasource-rest");
const axios = require("axios");

const { USERS_MS_URL } = require('./../../config');

class UsersAPI extends RESTDataSource {
  baseURL = USERS_MS_URL;

  async getCurrentUser(jwt) {
    const response = await axios
      .get("http://localhost:3000/users/me", {
        headers: { "x-auth-token": jwt },
      });
    return response.data;
  }

  async createUser(user) {
    return this.post(`users`, user);
  }
}

module.exports = UsersAPI;

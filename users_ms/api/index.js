const { RESTDataSource } = require("@apollo/datasource-rest");
const axios = require("axios");

class UsersAPI extends RESTDataSource {
  baseURL = "http://localhost:3000/";

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

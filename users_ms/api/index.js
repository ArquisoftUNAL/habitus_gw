const { RESTDataSource } = require("@apollo/datasource-rest");

const { USERS_MS_URL } = require("./../../config");

class UsersAPI extends RESTDataSource {
  baseURL = USERS_MS_URL;

  async getCurrentUser(jwt) {
    const response = await this.get(`users/me`, {
      headers: { "x-auth-token": jwt },
    });

    return response;
  }

  async getUserById(id) {
    const response = await this.get(`users/${id}`);

    return response;
  }

  async createUser(user) {
    const result = await this.fetch(`users`, {
      method: "POST",
      body: user
    });

    // Get auth header from response
    const jwt = result.response.headers.get("x-auth-token");

    return {
      ...result.parsedBody,
      jwt
    }; // Append jwt to user object
  }

  async validateToken(jwt) {
    const response = await this.get(`auth/token`, {
      headers: { "x-auth-token": jwt },
    });
    return response;
  }

  async loginUser(userLoginData) {
    const result = await this.fetch(
      `auth/login`,
      {
        method: "POST",
        body: userLoginData
      }
    );

    // Get auth header from response
    const jwt = result.response.headers.get("x-auth-token");

    return jwt;
  }

  async logoutUser(token) {
    const response = await this.delete(`auth/logout`, {
      headers: { "x-auth-token": token },
    });
    return response;
  }

  async deleteUser(jwt) {
    let response;
    try {
      response = await this.delete(`users/me`, {
        headers: { "x-auth-token": jwt },
      });
    } catch (error) {
      return null;
    }
    return response.data;
  }
}

module.exports = UsersAPI;

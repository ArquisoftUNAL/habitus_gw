const { RESTDataSource } = require("@apollo/datasource-rest");

// MOCK Data only
const userData = require("./../../MOCK_DATA.json");

class UsersAPI extends RESTDataSource {
    baseURL = "http://localhost:3000/";

    async getUserById(id) {
        return this.get(`users/me`,
            // Set x-auth-token header
            {
                headers: {
                    // "x-auth-token": this.context.token
                    "x-auth-token":
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA3Y2Q1OTYxYWQ5N2I4ZmZiMzUwMTUiLCJfaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NTAxMDEzNywiZXhwIjoxNjk1MDUzMzM3fQ.Rdyd5Lovm8zFLcJ-mg3DDVRGD09Za_vE6e0Jf_Rmcso",
                }
            }
        );
    }

    async createUser(user) {
        return this.post(`users`, user);
    }

}

module.exports = UsersAPI;
const { RESTDataSource } = require("@apollo/datasource-rest");
const configHabitsAPI = require("./habits.api");

class HabitsAPI extends RESTDataSource {
    baseURL = "http://localhost:3030/api/v1/";
}

// Link methods from api files to HabitsAPI class
configHabitsAPI(HabitsAPI);

module.exports = HabitsAPI;
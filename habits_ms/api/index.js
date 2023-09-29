const { RESTDataSource } = require("@apollo/datasource-rest");

// Configure habits api
const configHabitsAPI = require("./habits.api");
const configCategoriesAPI = require("./categories.api");
const configHabitDataAPI = require("./habitsdata.api");
const configEventsAPI = require("./events.api");
const configOwnershipAPI = require("./ownership.api");

class HabitsAPI extends RESTDataSource {
    baseURL = "http://localhost:3030/api/v1/";
}

// Link methods from api files to HabitsAPI class
configHabitsAPI(HabitsAPI);
configCategoriesAPI(HabitsAPI);
configHabitDataAPI(HabitsAPI);
configEventsAPI(HabitsAPI);
configOwnershipAPI(HabitsAPI);

module.exports = HabitsAPI;
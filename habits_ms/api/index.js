const { RESTDataSource } = require("@apollo/datasource-rest");
const configHabitsAPI = require("./habits.api");
const configCategoriesAPI = require("./categories.api");
const configRecurrencesAPI = require("./recurrences.api");
const configHabitDataAPI = require("./habitsdata.api");

class HabitsAPI extends RESTDataSource {
    baseURL = "http://localhost:3030/api/v1/";
}

// Link methods from api files to HabitsAPI class
configHabitsAPI(HabitsAPI);
configCategoriesAPI(HabitsAPI);
configRecurrencesAPI(HabitsAPI);
configHabitDataAPI(HabitsAPI);

module.exports = HabitsAPI;
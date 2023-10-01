const { RESTDataSource } = require("@apollo/datasource-rest");

const { HABITS_MS_URL } = require('./../../config');

// Configure habits api
const configHabitsAPI = require("./habits.api");
const configCategoriesAPI = require("./categories.api");
const configHabitDataAPI = require("./habitsdata.api");
const configEventsAPI = require("./events.api");
const configOwnershipAPI = require("./ownership.api");

class HabitsAPI extends RESTDataSource {
    baseURL = `${HABITS_MS_URL}api/v1/`;
}

// Link methods from api files to HabitsAPI class
configHabitsAPI(HabitsAPI);
configCategoriesAPI(HabitsAPI);
configHabitDataAPI(HabitsAPI);
configEventsAPI(HabitsAPI);
configOwnershipAPI(HabitsAPI);

module.exports = HabitsAPI;
const { RESTDataSource } = require("@apollo/datasource-rest");
const configAchievementsAPI = require("./achievements.api");
const configMilestonesAPI = require("./milestones.api");

class AchievementsAPI extends RESTDataSource {
    baseURL = "http://localhost:8181/api/";
}

// Link methods from api files to HabitsAPI class
configAchievementsAPI(AchievementsAPI);
configMilestonesAPI(AchievementsAPI);

module.exports = AchievementsAPI;
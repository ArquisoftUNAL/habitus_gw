const { RESTDataSource } = require("@apollo/datasource-rest");

const { ACHIEVEMENTS_MS_URL } = require('./../../config');

// Configure achievements api
const configAchievementsAPI = require("./achievements.api");
const configMilestonesAPI = require("./milestones.api");

class AchievementsAPI extends RESTDataSource {
    baseURL = `${ACHIEVEMENTS_MS_URL}api/`;
}

// Link methods from api files to HabitsAPI class
configAchievementsAPI(AchievementsAPI);
configMilestonesAPI(AchievementsAPI);

module.exports = AchievementsAPI;
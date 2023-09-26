const BASE_ACHIEVEMENTS_PATH = "achievements";

async function getHabitAchievements(id) {
    return this.get(
        `${BASE_ACHIEVEMENTS_PATH}/${encodeURIComponent(id)}`);
}

async function addAchievement(achievement) {
    return this.post(`${BASE_ACHIEVEMENTS_PATH}/create-ach`, {
        body: achievement
    });
}

async function updateAchievement(id, achievement) {
    return this.patch(`${BASE_ACHIEVEMENTS_PATH}/patch-ach`, {
        body: achievement,
        headers: {
            "ach-id": id
        }
    });
}

async function updateAchievementStreak(id, retainStreak) {
    return this.delete(`${BASE_ACHIEVEMENTS_PATH}/patch-streak/${encodeURIComponent(retainStreak)}`, {
        headers: {
            "ach-id": id
        }
    });
}

async function deleteAchievement(id) {
    return this.delete(`${BASE_ACHIEVEMENTS_PATH}/del-ach`, {
        headers: {
            "ach-id": id
        }
    });
}

module.exports = (AchievementsAPI) => {
    AchievementsAPI.prototype.getHabitAchievements = getHabitAchievements;
    AchievementsAPI.prototype.addAchievement = addAchievement;
    AchievementsAPI.prototype.updateAchievement = updateAchievement;
    AchievementsAPI.prototype.updateAchievementStreak = updateAchievementStreak;
    AchievementsAPI.prototype.deleteAchievement = deleteAchievement;
}
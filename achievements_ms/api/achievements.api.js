const BASE_ACHIEVEMENTS_PATH = "achievements";

async function getHabitAchievements(id, page, per_page) {
    if (!page) page = 1;
    if (!per_page) per_page = 10;

    return this.get(
        `${BASE_ACHIEVEMENTS_PATH}/${encodeURIComponent(id)}/${page}/${per_page}`
    );
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
    return this.patch(`${BASE_ACHIEVEMENTS_PATH}/patch-streak/${encodeURIComponent(retainStreak)}`, {
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

async function notifyStreakUpdate(id, freq_type, streak) {
    return this.patch(`${BASE_ACHIEVEMENTS_PATH}/patch-streak`, {
        body: {
            hab_id: id,
            freq_type: freq_type,
            streak: streak
        }
    });
}

module.exports = (AchievementsAPI) => {
    AchievementsAPI.prototype.getHabitAchievements = getHabitAchievements;
    AchievementsAPI.prototype.addAchievement = addAchievement;
    AchievementsAPI.prototype.updateAchievement = updateAchievement;
    AchievementsAPI.prototype.updateAchievementStreak = updateAchievementStreak;
    AchievementsAPI.prototype.notifyStreakUpdate = notifyStreakUpdate;
    AchievementsAPI.prototype.deleteAchievement = deleteAchievement;
}
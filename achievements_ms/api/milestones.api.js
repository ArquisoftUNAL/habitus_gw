const BASE_MILESTONES_PATH = "milestones";

async function getAchievementMilestones(id) {
    return this.get(
        `${BASE_MILESTONES_PATH}/${encodeURIComponent(id)}`);
}

async function addMilestone(milestone) {
    return this.post(`${BASE_MILESTONES_PATH}/create-mil`, {
        body: milestone
    });
}

async function updateMilestone(id, milestone) {
    return this.patch(`${BASE_MILESTONES_PATH}/patch-mil`, {
        body: milestone,
        headers: {
            "mil-id": id
        }
    });
}

async function deleteMilestone(id) {
    return this.delete(`${BASE_MILESTONES_PATH}/del-mil`, {
        headers: {
            "mil-id": id
        }
    });
}

module.exports = (AchievementsAPI) => {
    AchievementsAPI.prototype.getAchievementMilestones = getAchievementMilestones;
    AchievementsAPI.prototype.addMilestone = addMilestone;
    AchievementsAPI.prototype.updateMilestone = updateMilestone;
    AchievementsAPI.prototype.deleteMilestone = deleteMilestone;
}
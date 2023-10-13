const BASE_EVENTS_PATH = "ownership";
const { generateRequestHeaders } = require("./../utils");

async function checkHabitOwnership(userId, isAdmin, habId) {

    // Check if an habit is accessible by the user ( No need to do this on habits ms )
    await this.get(
        `${BASE_EVENTS_PATH}/habit/${habId}`, {
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return true;
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.checkHabitOwnership = checkHabitOwnership;
}
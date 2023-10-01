const BASE_EVENTS_PATH = "ownership";

async function checkHabitOwnership(userId, isAdmin, habId) {

    // Check if an habit is accessible by the user ( No need to do this on habits ms )
    await this.get(
        `${BASE_EVENTS_PATH}/${habId}`, {
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });

    return true;
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.checkHabitOwnership = checkHabitOwnership;
}
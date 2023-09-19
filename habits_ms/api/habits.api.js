const BASE_HABITS_PATH = "habits";

async function getHabit(id) {
    return this.get(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`);
}

async function getUserHabits(user, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABITS_PATH}/user/${encodeURIComponent(user)}`, {
        habits_page: page,
        habits_per_page: perPage
    });

    return data.habits;
}

async function addHabit(habit) {
    return this.post(`${BASE_HABITS_PATH}/`, habit);
}

async function updateHabit(id, habit) {
    return this.patch(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`, habit);
}

async function deleteHabit(id) {
    return this.delete(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`);
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getHabit = getHabit;
    HabitsAPI.prototype.getUserHabits = getUserHabits;
    HabitsAPI.prototype.addHabit = addHabit;
    HabitsAPI.prototype.updateHabit = updateHabit;
    HabitsAPI.prototype.deleteHabit = deleteHabit;
}
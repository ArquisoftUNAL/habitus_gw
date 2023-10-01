const BASE_HABITS_PATH = "habits";
const { generateRequestHeaders } = require("./../utils");

async function getHabit(userId, isAdmin, id, mode = "simple") {

    let base_url = `${BASE_HABITS_PATH}/${encodeURIComponent(id)}`;

    if (mode === "data") {
        base_url += "/data";
    }

    return this.get(
        base_url, {
        headers: generateRequestHeaders(userId, isAdmin)
    }).habit;
}

async function getUserHabits(userId, isAdmin, page = 1, perPage = 10, mode = "simple") {

    let base_url = `${BASE_HABITS_PATH}`;

    if (mode === "data") {
        base_url += "/data";
    }

    const data = await this.get(
        base_url, {
        params: {
            habits_page: page,
            habits_per_page: perPage
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.habits;
}

async function getCategoryHabits(userId, isAdmin, category, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABITS_PATH}/category/${encodeURIComponent(category)}`, {
        params: {
            habits_page: page,
            habits_per_page: perPage
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.habits;
}

async function addHabit(userId, isAdmin, habit) {
    return this.post(`${BASE_HABITS_PATH}/`, {
        body: habit,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function updateHabit(userId, isAdmin, id, habit) {
    return this.patch(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`, {
        body: habit,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function deleteHabit(userId, isAdmin, id) {
    return this.delete(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`, {
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getHabit = getHabit;
    HabitsAPI.prototype.getUserHabits = getUserHabits;
    HabitsAPI.prototype.getCategoryHabits = getCategoryHabits;
    HabitsAPI.prototype.addHabit = addHabit;
    HabitsAPI.prototype.updateHabit = updateHabit;
    HabitsAPI.prototype.deleteHabit = deleteHabit;
}
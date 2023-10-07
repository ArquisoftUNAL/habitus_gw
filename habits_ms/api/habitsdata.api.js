const BASE_HABIT_DATA = "habitdata";
const { generateRequestHeaders } = require("./../utils");

async function getHabitdataById(userId, isAdmin, id) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/${encodeURIComponent(id)}/`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        },
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.data;
}

async function getHabitData(
    userId, isAdmin, habit,
    page = null, perPage = null, start_date = null, end_date = null
) {

    let params = {};

    if (start_date) {
        params.start_date = start_date;
    }

    if (end_date) {
        params.end_date = end_date;
    }

    if (page) {
        params.data_page = page;
    }

    if (perPage) {
        params.data_per_page = perPage;
    }

    const data = await this.get(
        `${BASE_HABIT_DATA}/habit/${encodeURIComponent(habit)}`, {
        params: params,
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.data;
}

async function getUserHabitData(
    userId, isAdmin,
    page = null, perPage = null, start_date = null, end_date = null
) {

    let params = {};

    if (start_date) {
        params.start_date = start_date;
    }

    if (end_date) {
        params.end_date = end_date;
    }

    if (page) {
        params.data_page = page;
    }

    if (perPage) {
        params.data_per_page = perPage;
    }

    const data = await this.get(
        `${BASE_HABIT_DATA}`, {
        params: params,
        headers: generateRequestHeaders(userId, isAdmin)
    });

    return data.data;
}

async function addHabitdata(userId, isAdmin, data) {
    return this.post(`${BASE_HABIT_DATA}/`, {
        body: data,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function updateHabitdata(userId, isAdmin, id, data) {
    return this.patch(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        body: data,
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

async function deleteHabitdata(userId, isAdmin, id) {
    return this.delete(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        headers: generateRequestHeaders(userId, isAdmin)
    });
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getHabitdataById = getHabitdataById;
    HabitsAPI.prototype.getHabitData = getHabitData;
    HabitsAPI.prototype.getUserHabitData = getUserHabitData;
    HabitsAPI.prototype.addHabitdata = addHabitdata;
    HabitsAPI.prototype.updateHabitdata = updateHabitdata;
    HabitsAPI.prototype.deleteHabitdata = deleteHabitdata;
}
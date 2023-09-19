const BASE_HABIT_DATA = "habitdata";

async function getHabitdataById(id) {
    const data = await this.get(
        `${BASE_HABIT_DATA}`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        }
    });

    return data.data;
}

async function getRecurrenceData(recurrence, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/recurrence/${encodeURIComponent(recurrence)}`, {
        params: {
            recurrences_page: page,
            recurrences_per_page: perPage
        }
    });

    return data.data;
}

async function addHabitdata(recurrence) {
    return this.post(`${BASE_HABIT_DATA}/`, recurrence);
}

async function updateHabitdata(id, recurrence) {
    return this.patch(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, recurrence);
}

async function deleteHabitdata(id) {
    return this.delete(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`);
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getHabitdataById = getHabitdataById;
    HabitsAPI.prototype.addHabitdata = addHabitdata;
    HabitsAPI.prototype.updateHabitdata = updateHabitdata;
    HabitsAPI.prototype.deleteHabitdata = deleteHabitdata;
}
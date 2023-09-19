const BASE_RECURRENCES_PATH = "recurrences";

async function getRecurrenceById(id, mode = "simple") {

    let base_url = `${BASE_RECURRENCES_PATH}/${encodeURIComponent(id)}`;

    if (mode === "data") {
        base_url += "/data";
    }

    const data = await this.get(
        base_url
    );

    return data.recurrence;
}

async function getHabitRecurrences(habit, page = 1, perPage = 10) {

    let base_url = `${BASE_RECURRENCES_PATH}/habit/${encodeURIComponent(habit)}`;

    const data = await this.get(
        base_url, {
        params: {
            recurrences_page: page,
            recurrences_per_page: perPage
        }
    });

    return data.recurrences;
}

async function addRecurrence(recurrence) {
    return this.post(`${BASE_RECURRENCES_PATH}/`, recurrence);
}

async function updateRecurrence(id, recurrence) {
    return this.patch(`${BASE_RECURRENCES_PATH}/${encodeURIComponent(id)}`, recurrence);
}

async function deleteRecurrence(id) {
    return this.delete(`${BASE_RECURRENCES_PATH}/${encodeURIComponent(id)}`);
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getRecurrenceById = getRecurrenceById;
    HabitsAPI.prototype.getHabitRecurrences = getHabitRecurrences;
    HabitsAPI.prototype.addRecurrence = addRecurrence;
    HabitsAPI.prototype.updateRecurrence = updateRecurrence;
    HabitsAPI.prototype.deleteRecurrence = deleteRecurrence;
}
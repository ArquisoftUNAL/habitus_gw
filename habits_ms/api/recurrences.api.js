const BASE_RECURRENCES_PATH = "recurrences";

async function getRecurrenceById(page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_RECURRENCES_PATH}`, {
        recurrences_page: page,
        recurrences_per_page: perPage
    }
    );

    return data.recurrence;
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
    HabitsAPI.prototype.addRecurrence = addRecurrence;
    HabitsAPI.prototype.updateRecurrence = updateRecurrence;
    HabitsAPI.prototype.deleteRecurrence = deleteRecurrence;
}
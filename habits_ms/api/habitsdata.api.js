const BASE_HABIT_DATA = "habitdata";

async function getHabitdataById(id) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/${encodeURIComponent(id)}/`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        },
        headers: {
            "credentials": "test"
        }
    });

    return data.data;
}

async function getHabitData(habit, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/habit/${encodeURIComponent(habit)}`, {
        params: {
            data_page: page,
            data_per_page: perPage
        },
        headers: {
            "credentials": "test"
        }
    });

    return data.data;
}

async function getUsertData(page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABIT_DATA}`, {
        params: {
            data_page: page,
            data_per_page: perPage
        },
        headers: {
            "credentials": "test"
        }
    });

    return data.data;
}

async function addHabitdata(recurrence) {
    return this.post(`${BASE_HABIT_DATA}/`, {
        body: recurrence,
        headers: {
            "credentials": "test"
        }
    });
}

async function updateHabitdata(id, recurrence) {
    return this.patch(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        body: recurrence,
        headers: {
            "credentials": "test"
        }
    });
}

async function deleteHabitdata(id) {
    return this.delete(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        headers: {
            "credentials": "test"
        }
    });
}

module.exports = (HabitsAPI) => {
    HabitsAPI.prototype.getHabitdataById = getHabitdataById;
    HabitsAPI.prototype.getHabitData = getHabitData;
    HabitsAPI.prototype.getUsertData = getUsertData;
    HabitsAPI.prototype.addHabitdata = addHabitdata;
    HabitsAPI.prototype.updateHabitdata = updateHabitdata;
    HabitsAPI.prototype.deleteHabitdata = deleteHabitdata;
}
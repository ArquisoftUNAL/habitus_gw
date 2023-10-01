const BASE_HABIT_DATA = "habitdata";

async function getHabitdataById(userId, isAdmin, id) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/${encodeURIComponent(id)}/`, {
        params: {
            categories_page: page,
            categories_per_page: perPage
        },
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });

    return data.data;
}

async function getHabitData(userId, isAdmin, habit, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABIT_DATA}/habit/${encodeURIComponent(habit)}`, {
        params: {
            data_page: page,
            data_per_page: perPage
        },
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });

    return data.data;
}

async function getUsertData(userId, isAdmin, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABIT_DATA}`, {
        params: {
            data_page: page,
            data_per_page: perPage
        },
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });

    return data.data;
}

async function addHabitdata(userId, isAdmin, recurrence) {
    return this.post(`${BASE_HABIT_DATA}/`, {
        body: recurrence,
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });
}

async function updateHabitdata(userId, isAdmin, id, recurrence) {
    return this.patch(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        body: recurrence,
        headers: {
            "credentials": isAdmin ? "administrator" : userId
        }
    });
}

async function deleteHabitdata(userId, isAdmin, id) {
    return this.delete(`${BASE_HABIT_DATA}/${encodeURIComponent(id)}`, {
        headers: {
            "credentials": isAdmin ? "administrator" : userId
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
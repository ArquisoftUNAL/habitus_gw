const BASE_HABITS_PATH = "habits";

async function getHabit(id, mode = "simple") {

    let base_url = `${BASE_HABITS_PATH}/${encodeURIComponent(id)}`;

    if (mode === "data") {
        base_url += "/data";
    }

    return this.get(
        base_url, {
        headers: {
            "credentials": "test"
        }
    }).habit;
}

async function getUserHabits(page = 1, perPage = 10, mode = "simple") {

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
        headers: {
            "credentials": "test"
        }
    });

    return data.habits;
}

async function getCategoryHabits(category, page = 1, perPage = 10) {
    const data = await this.get(
        `${BASE_HABITS_PATH}/category/${encodeURIComponent(category)}`, {
        params: {
            habits_page: page,
            habits_per_page: perPage
        },
        headers: {
            "credentials": "test"
        }
    });

    return data.habits;
}

async function addHabit(habit) {
    return this.post(`${BASE_HABITS_PATH}/`, {
        body: habit,
        headers: {
            "credentials": "test"
        }
    });
}

async function updateHabit(id, habit) {
    return this.patch(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`, {
        body: habit,
        headers: {
            "credentials": "test"
        }
    });
}

async function deleteHabit(id) {
    return this.delete(`${BASE_HABITS_PATH}/${encodeURIComponent(id)}`, {
        headers: {
            "credentials": "test"
        }
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
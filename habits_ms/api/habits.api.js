const { RESTDataSource } = require("@apollo/datasource-rest");

class HabitsAPI extends RESTDataSource {
    baseURL = "http://localhost:3030/api/v1/habits/";

    async getHabit(id) {
        return this.get(`${encodeURIComponent(id)}`);
    }

    async getUserHabits(user, page = 1, perPage = 10) {
        const data = await this.get(
            `user/${encodeURIComponent(user)}`, {
            habits_page: page,
            habits_per_page: perPage
        });

        return data.habits;
    }

    async addHabit(habit) {
        return this.post("", habit);
    }

    async updateHabit(id, habit) {
        return this.patch(`${encodeURIComponent(id)}`, habit);
    }

    async deleteHabit(id) {
        return this.delete(`${encodeURIComponent(id)}`);
    }

}

module.exports = HabitsAPI;
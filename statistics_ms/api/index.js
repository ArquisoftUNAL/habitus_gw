const { RESTDataSource } = require("@apollo/datasource-rest");

class StatisticsAPI extends RESTDataSource {
    baseURL = "http://localhost:8000/api/stats/";

    async getMeasureHabitResume(id) {
        return this.get(`measure/resume/${id}`);
    }

    async getYnHabitResume(id) {
        return this.get(`yn/resume/${id}`);
    }

    async getMeasureHabitReport(id) {
        return this.get(`report/measure/${id}`);
    }

    async getYnHabitReport(id) {
        return this.get(`report/yn/${id}`);
    }

    async getYnStreak(id) {
        return this.get(`yn/streaks/${id}`);
    }

    async getYnHabitHistory(id) {
        return this.get(`yn/history/${id}`);
    }

    async getMeasureHabitHistory(id) {
        return this.get(`measure/history/${id}`);
    }

    async getHabitFreqWeekDay(id) {
        return this.get(`freq_day_week/${id}`);
    }

}

module.exports = StatisticsAPI;
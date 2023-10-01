const { RESTDataSource } = require("@apollo/datasource-rest");

const { STATISTICS_MS_URL } = require('./../../config');

class StatisticsAPI extends RESTDataSource {
    baseURL = `${STATISTICS_MS_URL}/api/stats/`;

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

    async getMeasureStreaks(id) {
        return this.get(`measure/streaks/${id}`);
    }

}

module.exports = StatisticsAPI;
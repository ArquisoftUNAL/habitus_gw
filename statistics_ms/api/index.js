const { RESTDataSource } = require("@apollo/datasource-rest");

const { STATISTICS_MS_URL } = require('./../../config');

class StatisticsAPI extends RESTDataSource {
    baseURL = `${STATISTICS_MS_URL}api/stats/`;

    async getReport(id) {
        return this.get(`report/${id}`);
    }

}

module.exports = StatisticsAPI;
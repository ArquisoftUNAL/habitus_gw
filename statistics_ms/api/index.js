const { RESTDataSource } = require("@apollo/datasource-rest");

const { STATISTICS_MS_URL } = require('./../../config');

class StatisticsAPI extends RESTDataSource {
    baseURL = `${STATISTICS_MS_URL}api/stats/`;

    async getReport(id) {
        const result = await this.get(`${id}`);
        return result;
    }

}

module.exports = StatisticsAPI;
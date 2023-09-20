const measureResolver = require('./measure.resolver');
const reportResolver = require('./report.resolver');
const ynResolver = require('./yn.resolver');

const response = {
    Query: {
        ...measureResolver.Query,
        ...reportResolver.Query,
        ...ynResolver.Query,
        freqWeekdayHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getHabitFreqWeekDay(id);
        }
    },
    Mutation: {
    }
};

module.exports = response;
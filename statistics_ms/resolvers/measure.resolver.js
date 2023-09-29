const resolvers = {
    Query: {
        resumeMeasureHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getMeasureHabitResume(id);
        },

        historyMeasureHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getMeasureHabitHistory(id);
        }
    }
};

module.exports = resolvers;
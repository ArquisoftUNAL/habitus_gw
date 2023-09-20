const resolvers = {
    Query: {
        reportMeasureHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getMeasureHabitReport(id);
        },

        reportYnHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getYnHabitReport(id);
        }
    }
};

module.exports = resolvers;
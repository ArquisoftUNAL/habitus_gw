const resolvers = {
    Query: {
        resumeYnHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getYnHabitResume(id);
        },

        historyYnHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getYnHabitHistory(id);
        },

        streakYnHabit: async (_, { id }, { dataSources }) => {
            return dataSources.statisticsAPI.getYnStreak(id);
        }
    }
};

module.exports = resolvers;
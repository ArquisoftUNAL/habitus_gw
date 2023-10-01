const { GraphQLError } = require('graphql');
const checkHabitOwnership = require('../../utils/checkHabitOwnership');

const resolvers = {
    Query: {
        resumeMeasureHabit: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getMeasureHabitResume(id);
        },

        historyMeasureHabit: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getMeasureHabitHistory(id);
        },

        measureStreaks: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getMeasureStreaks(id);
        }
    }
};

module.exports = resolvers;
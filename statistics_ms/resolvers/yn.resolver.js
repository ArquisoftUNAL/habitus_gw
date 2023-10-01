const { GraphQLError } = require('graphql');
const checkHabitOwnership = require('../../utils/checkHabitOwnership');

const resolvers = {
    Query: {
        resumeYnHabit: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getYnHabitResume(id);
        },

        historyYnHabit: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getYnHabitHistory(id);
        },

        streakYnHabit: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habit);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.statisticsAPI.getYnStreak(id);
        }
    }
};

module.exports = resolvers;
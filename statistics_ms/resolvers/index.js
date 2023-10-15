const checkHabitOwnership = require('./../../utils/checkHabitOwnership');
const { GraphQLError } = require('graphql');

const response = {
    Query: {
        habitReport: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }

            return dataSources.statisticsAPI.getReport(id);
        }
    },
    Mutation: {
    }
};

module.exports = response;
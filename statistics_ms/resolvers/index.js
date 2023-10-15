const checkHabitOwnership = require('./../../utils/checkHabitOwnership');

// Temporal while statistics ms gets online
const { generateFakeStatisticsMeasureData } = require("./../../utils/generateFakeData");
const { GraphQLError } = require('graphql');

const response = {
    Query: {
        habitMeasureReport: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }


            return generateFakeStatisticsMeasureData(false);
            // return dataSources.statisticsAPI.getReport(id);
        },
        habitYnReport: async (_, { id }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }

            return generateFakeStatisticsMeasureData(true);
            // return dataSources.statisticsAPI.getReport(id);
        }
    },
    Mutation: {
    }
};

module.exports = response;
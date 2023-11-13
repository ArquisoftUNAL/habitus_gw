const checkHabitOwnership = require('./../../utils/checkHabitOwnership');
const validatePermissions = require('./../../utils/matchPermisssion');

// Temporal while statistics ms gets online
const { generateFakeStatisticsMeasureData } = require("./../../utils/generateFakeData");
const { GraphQLError } = require('graphql');

const response = {
    Query: {
        habitFMeasureReport: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitFMeasureReport");
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }


            return generateFakeStatisticsMeasureData(false);
        },
        habitFYnReport: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitFYnReport");
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }

            return generateFakeStatisticsMeasureData(true);
        },
        habitMeasureReport: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitMeasureReport");
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }

            return dataSources.statisticsAPI.getReport(id);
        },
        habitYnReport: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitYnReport");
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
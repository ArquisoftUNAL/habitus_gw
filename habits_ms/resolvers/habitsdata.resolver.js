const { HABITS_UPDATE_QUEUE } = require('./../../config');
const { notifyHabitUpdate } = require('./../utils');
const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        habitdataById: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitdataById");
            return dataSources.habitsAPI.getHabitdataById(userId, isAdmin, id);
        },

        habitdataByHabit: async (_, { id, start_date, end_date, page, per_page }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitdataByHabit");
            return dataSources.habitsAPI.getHabitData(userId, isAdmin, id, page, per_page, start_date, end_date);
        },

        habitdataByUser: async (_, { start_date, end_date, page, per_page }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitdataByUser");
            return dataSources.habitsAPI.getUserHabitData(userId, isAdmin, page, per_page, start_date, end_date);
        }
    },

    Mutation: {
        addHabitdata: async (_, { data }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "addHabitdata");
            const result = await dataSources.habitsAPI.addHabitdata(userId, isAdmin, data);

            // Enqueue habit data update
            if (dataSources.habitsQueue)
                dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, {
                    ...result.data,
                    type: 'create'
                });

            return result;
        },

        updateHabitdata: async (_, { datId, data }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "updateHabitdata");
            // Enqueue habit data update
            const result = await dataSources.habitsAPI.updateHabitdata(userId, isAdmin, datId, data);

            if (dataSources.habitsQueue)
                dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, {
                    ...result.data,
                    type: 'update'
                });

            return result;
        },

        deleteHabitdata: async (_, { datId }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "deleteHabitdata");
            const result = await dataSources.habitsAPI.deleteHabitdata(userId, isAdmin, datId);

            // Enqueue habit data update
            if (dataSources.habitsQueue)
                dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, {
                    ...result.data,
                    type: 'delete'
                });

            return result;
        }
    }
};

module.exports = resolvers;
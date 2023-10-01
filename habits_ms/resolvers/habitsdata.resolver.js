const { HABITS_UPDATE_QUEUE } = require('./../../config');

const resolvers = {
    Query: {
        habitdataById: async (_, { id }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getHabitdataById(userId, isAdmin, id);
        },

        habitdataByHabit: async (_, { id, page, per_page }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getHabiteData(userId, isAdmin, id, page, per_page);
        },

        habitdataByUser: async (_, { page, per_page }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getUsertData(userId, isAdmin, page, per_page);
        }
    },

    Mutation: {
        addHabitdata: async (_, { habitdataData }, { dataSources, userId, isAdmin, }) => {
            const result = await dataSources.habitsAPI.addHabitdata(userId, isAdmin, habitdataData);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        },

        updateHabitdata: async (_, { datId, habitdataData }, { dataSources, userId, isAdmin, }) => {
            // Enqueue habit data update

            const result = await dataSources.habitsAPI.updateHabitdata(userId, isAdmin, datId, habitdataData);

            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        },

        deleteHabitdata: async (_, { datId }, { dataSources, userId, isAdmin, }) => {
            const result = await dataSources.habitsAPI.deleteHabitdata(userId, isAdmin, datId);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        }
    }
};

module.exports = resolvers;
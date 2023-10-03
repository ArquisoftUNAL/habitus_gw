const { HABITS_UPDATE_QUEUE } = require('./../../config');
const { notifyHabitUpdate } = require('./../utils');

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
        addHabitdata: async (_, { data }, { dataSources, userId, isAdmin, }) => {
            const result = await dataSources.habitsAPI.addHabitdata(userId, isAdmin, data);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            try {
                await notifyHabitUpdate(dataSources, result);
            } catch (e) {
                console.log(e);
            }

            return result;
        },

        updateHabitdata: async (_, { datId, data }, { dataSources, userId, isAdmin, }) => {
            // Enqueue habit data update
            const result = await dataSources.habitsAPI.updateHabitdata(userId, isAdmin, datId, data);

            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            try {
                await notifyHabitUpdate(dataSources, result);
            } catch (e) {
                console.log(e);
            }

            return result;
        },

        deleteHabitdata: async (_, { datId }, { dataSources, userId, isAdmin, }) => {
            const result = await dataSources.habitsAPI.deleteHabitdata(userId, isAdmin, datId);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            try {
                await notifyHabitUpdate(dataSources, result);
            } catch (e) {
                console.log(e);
            }

            return result;
        }
    }
};

module.exports = resolvers;
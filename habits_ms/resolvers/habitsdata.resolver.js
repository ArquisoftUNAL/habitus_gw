const { HABITS_UPDATE_QUEUE } = require('./../../config');

const resolvers = {
    Query: {
        habitdataById: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.getHabitdataById(id);
        },

        habitdataByHabit: async (_, { id, page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getHabiteData(id, page, per_page);
        },

        habitdataByUser: async (_, { page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getUsertData(page, per_page);
        }
    },

    Mutation: {
        addHabitdata: async (_, { habitdataData }, { dataSources }) => {
            const result = await dataSources.habitsAPI.addHabitdata(habitdataData);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        },

        updateHabitdata: async (_, { datId, habitdataData }, { dataSources }) => {
            // Enqueue habit data update

            const result = await dataSources.habitsAPI.updateHabitdata(datId, habitdataData);

            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        },

        deleteHabitdata: async (_, { datId }, { dataSources }) => {
            const result = await dataSources.habitsAPI.deleteHabitdata(datId);

            // Enqueue habit data update
            dataSources.habitsQueue.publish(HABITS_UPDATE_QUEUE, result.data);

            return result;
        }
    }
};

module.exports = resolvers;
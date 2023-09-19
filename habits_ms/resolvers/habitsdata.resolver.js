const resolvers = {
    Query: {
        habitdataById: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.getHabitdataById(id);
        },

        habitdataByRecurrence: async (_, { id, page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getRecurrenceData(id, page, per_page);
        }
    },

    Mutation: {
        addHabitdata: async (_, { habitdataData }, { dataSources }) => {
            return dataSources.habitsAPI.addHabitdata(habitdataData);
        },

        updateHabitdata: async (_, { recId, habitdataData }, { dataSources }) => {
            return dataSources.habitsAPI.updateHabitdata(recId, habitdataData);
        },

        deleteHabitdata: async (_, { recId }, { dataSources }) => {
            return dataSources.habitsAPI.deleteHabitdata(recId);
        }
    }
};

module.exports = resolvers;
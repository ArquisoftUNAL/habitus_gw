const resolvers = {
    Query: {
        habitdataById: async (_, { recId }, { dataSources }) => {
            return dataSources.habitsAPI.getHabitdataById(recId);
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
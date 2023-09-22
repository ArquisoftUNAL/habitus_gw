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
            return dataSources.habitsAPI.addHabitdata(habitdataData);
        },

        updateHabitdata: async (_, { datId, habitdataData }, { dataSources }) => {
            return dataSources.habitsAPI.updateHabitdata(datId, habitdataData);
        },

        deleteHabitdata: async (_, { datId }, { dataSources }) => {
            return dataSources.habitsAPI.deleteHabitdata(datId);
        }
    }
};

module.exports = resolvers;
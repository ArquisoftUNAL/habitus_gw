const resolvers = {
    Query: {
        recurrenceById: async (_, { recId }, { dataSources }) => {
            return dataSources.habitsAPI.getRecurrenceById(recId);
        }
    },

    Mutation: {
        addRecurrence: async (_, { recurrenceData }, { dataSources }) => {
            return dataSources.habitsAPI.addRecurrence(recurrenceData);
        },

        updateRecurrence: async (_, { recId, recurrenceData }, { dataSources }) => {
            return dataSources.habitsAPI.updateRecurrence(recId, recurrenceData);
        },

        deleteRecurrence: async (_, { recId }, { dataSources }) => {
            return dataSources.habitsAPI.deleteRecurrence(recId);
        }
    }
};

module.exports = resolvers;
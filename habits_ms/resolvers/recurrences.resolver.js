const resolvers = {
    Query: {
        recurrenceById: async (_, { id, mode }, { dataSources }) => {
            return dataSources.habitsAPI.getRecurrenceById(id, mode);
        },

        recurrencesByHabit: async (_, { id, page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getHabitRecurrences(id, page, per_page);
        },
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
const resolvers = {
    Query: {
        habits: async (_, { usrId }, { dataSources }) => {
            return dataSources.habitsAPI.getUserHabits(usrId);
        },

        habitById: async (_, { habId }, { dataSources }) => {
            return dataSources.habitsAPI.getHabit(habId);
        }
    },

    Mutation: {
        addHabit: async (_, { habitData }, { dataSources }) => {
            return dataSources.habitsAPI.addHabit(habitData);
        },

        updateHabit: async (_, { id, habitData }, { dataSources }) => {
            return dataSources.habitsAPI.updateHabit(id, habitData);
        },

        deleteHabit: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.deleteHabit(id);
        }
    }
};

module.exports = resolvers;
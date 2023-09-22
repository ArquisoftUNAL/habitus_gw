const resolvers = {
    Query: {
        habitsByUser: async (_, { mode, page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getUserHabits(page, per_page, mode);
        },

        habitById: async (_, { id, mode }, { dataSources }) => {
            return dataSources.habitsAPI.getHabit(id, mode);
        },

        habitsByCategory: async (_, { id, page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getCategoryHabits(id, page, per_page);
        }
    },

    Mutation: {
        addHabit: async (_, { habit }, { dataSources }) => {
            return dataSources.habitsAPI.addHabit(habit);
        },

        updateHabit: async (_, { id, habit }, { dataSources }) => {
            return dataSources.habitsAPI.updateHabit(id, habit);
        },

        deleteHabit: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.deleteHabit(id);
        }
    }
};

module.exports = resolvers;
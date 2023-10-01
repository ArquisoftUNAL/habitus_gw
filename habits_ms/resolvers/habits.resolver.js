const resolvers = {
    Query: {
        habitsByUser: async (_, { mode, page, per_page }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getUserHabits(userId, isAdmin, page, per_page, mode);
        },

        habitById: async (_, { id, mode }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getHabit(userId, isAdmin, id, mode);
        },

        habitsByCategory: async (_, { id, page, per_page }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getCategoryHabits(userId, isAdmin, id, page, per_page);
        }
    },

    Mutation: {
        addHabit: async (_, { habit }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.addHabit(userId, isAdmin, habit);
        },

        updateHabit: async (_, { id, habit }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.updateHabit(userId, isAdmin, id, habit);
        },

        deleteHabit: async (_, { id }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.deleteHabit(userId, isAdmin, id);
        }
    }
};

module.exports = resolvers;
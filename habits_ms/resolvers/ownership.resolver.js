const resolvers = {
    Query: {
        habitOwnership: async (_, { id }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.checkHabitOwnership(userId, isAdmin, id);
        }
    }
};

module.exports = resolvers;
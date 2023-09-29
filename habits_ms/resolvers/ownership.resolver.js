const resolvers = {
    Query: {
        habitOwnership: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.checkHabitOwnership(id);
        }
    }
};

module.exports = resolvers;
const resolvers = {
    Query: {
        getUserById: async (_, { id }, { dataSources }) => {
            return dataSources.usersAPI.getUserById(id);
        }
    },

    Mutation: {
        createUser: async (_, { user }, { dataSources }) => {
            return dataSources.usersAPI.createUser(user);
        }
    }
};

module.exports = resolvers;
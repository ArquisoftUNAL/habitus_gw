module.exports = {
  Query: {
    getCurrentUser: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.getCurrentUser(token);
    },
    validateToken: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.validateToken(token);
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
    loginUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.loginUser(user);
    },
    deleteUser: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.deleteUser(token);
    }
  },
};

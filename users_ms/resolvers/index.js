module.exports = {
  Query: {
    getCurrentUser: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.getCurrentUser(token);
    },
    validateToken: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.validateToken(token);
    },
    getUserById: async (_, { id }, { dataSources }) => {
      return dataSources.usersAPI.getUserById(id);
    }
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
    updateUser: async (_, { user }, { dataSources, ___, ____, token }) => {
      return dataSources.usersAPI.updateUser(user, token);
    },
    loginUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.loginUser(user);
    },
    logoutUser: async (_, __, { dataSources, ___, ____, token }) => {
      return dataSources.usersAPI.logoutUser(token);
    },
    deleteUser: async (_, __, { dataSources, ___, _____, token }) => {
      return dataSources.usersAPI.deleteUser(token);
    }
  },
};

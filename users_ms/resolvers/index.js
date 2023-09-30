module.exports = {
  Query: {
    getCurrentUser: async (_, {jwt} , { dataSources }) => {
      return dataSources.usersAPI.getCurrentUser(jwt);
    },
    validateToken: async (_, { jwt }, { dataSources }) => {
      return dataSources.usersAPI.validateToken(jwt);
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
    loginUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.loginUser(user);
    },
    deleteUser: async (_, { jwt }, { dataSources }) => {
      return dataSources.usersAPI.deleteUser(jwt);
    }
  },
};

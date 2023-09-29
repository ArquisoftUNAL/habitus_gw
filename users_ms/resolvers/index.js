module.exports = {
  Query: {
    getCurrentUser: async (_, {jwt} , { dataSources }) => {
      return dataSources.usersAPI.getCurrentUser(jwt);
    },
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources }) => {
      return dataSources.usersAPI.createUser(user);
    },
  },
};

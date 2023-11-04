module.exports = {
  Query: {
    getExternalCategories: async (_, __, { dataSources }) => {
      return dataSources.externalInterfaceAPI.getData();
    }
  },

  Mutation: {
  },
};

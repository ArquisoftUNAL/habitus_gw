module.exports = {
  Query: {
    getMedicalCenters: async (_, __, { dataSources }) => {

      return dataSources.externalInterfaceAPI.getCentersData();
    }
  },

  Mutation: {
  },
};

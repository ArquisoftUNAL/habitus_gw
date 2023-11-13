const validatePermissions = require('./../../utils/matchPermisssion');

module.exports = {
  Query: {
    getMedicalCenters: async (_, __, { dataSources, permissions, role }) => {
      validatePermissions(permissions, role, "getMedicalCenters");
      return dataSources.externalInterfaceAPI.getCentersData();
    }
  },

  Mutation: {
  },
};

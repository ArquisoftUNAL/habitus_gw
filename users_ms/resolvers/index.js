const validatePermissions = require('./../../utils/matchPermisssion');

module.exports = {
  Query: {
    getCurrentUser: async (_, __, { dataSources, token, permissions, role }) => {
      validatePermissions(permissions, role, "getCurrentUser");
      return dataSources.usersAPI.getCurrentUser(token);
    },
    validateToken: async (_, __, { dataSources, token, permissions, role }) => {
      validatePermissions(permissions, role, "validateToken");
      return dataSources.usersAPI.validateToken(token);
    },
    getUserById: async (_, { id }, { dataSources, permissions, role }) => {
      validatePermissions(permissions, role, "getUserById");
      return dataSources.usersAPI.getUserById(id);
    }
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources, permissions, role }) => {
      validatePermissions(permissions, role, "createUser");
      return dataSources.usersAPI.createUser(user);
    },
    updateUser: async (_, { user }, { dataSources, token, permissions, role }) => {
      validatePermissions(permissions, role, "updateUser");
      return dataSources.usersAPI.updateUser(user, token);
    },
    loginUser: async (_, { user }, { dataSources, permissions, role }) => {
      validatePermissions(permissions, role, "loginUser");
      return dataSources.usersAPI.loginUser(user);
    },
    logoutUser: async (_, __, { dataSources, token, permissions, role }) => {
      validatePermissions(permissions, role, "logoutUser");
      return dataSources.usersAPI.logoutUser(token);
    },
    deleteUser: async (_, __, { dataSources, token, permissions, role }) => {
      validatePermissions(permissions, role, "deleteUser");
      return dataSources.usersAPI.deleteUser(token);
    }
  },
};

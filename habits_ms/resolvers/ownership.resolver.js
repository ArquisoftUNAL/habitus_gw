const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        habitOwnership: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "habitOwnership");
            return dataSources.habitsAPI.checkHabitOwnership(userId, isAdmin, id);
        }
    }
};

module.exports = resolvers;
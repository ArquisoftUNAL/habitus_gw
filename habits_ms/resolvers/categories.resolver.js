const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        categories: async (_, { page, per_page }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "categories");
            return dataSources.habitsAPI.getAllCategories(userId, isAdmin, page, per_page);
        },

        categoryById: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "categoryById");
            return dataSources.habitsAPI.getCategoryById(userId, isAdmin, id);
        }
    },

    Mutation: {
        addCategory: async (_, { category }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "addCategory");
            return dataSources.habitsAPI.addCategory(userId, isAdmin, category);
        },

        updateCategory: async (_, { id, category }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "updateCategory");
            return dataSources.habitsAPI.updateCategory(userId, isAdmin, id, category);
        },

        deleteCategory: async (_, { id }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "deleteCategory");
            return dataSources.habitsAPI.deleteCategory(userId, isAdmin, id);
        }
    }
};

module.exports = resolvers;
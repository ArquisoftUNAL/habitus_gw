const resolvers = {
    Query: {
        categories: async (_, { page, per_page }, { dataSources }) => {
            return dataSources.habitsAPI.getAllCategories(page, per_page);
        },

        categoryById: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.getCategoryById(id);
        }
    },

    Mutation: {
        addCategory: async (_, { category }, { dataSources }) => {
            return dataSources.habitsAPI.addCategory(category);
        },

        updateCategory: async (_, { id, category }, { dataSources }) => {
            return dataSources.habitsAPI.updateCategory(id, category);
        },

        deleteHabit: async (_, { id }, { dataSources }) => {
            return dataSources.habitsAPI.deleteCategory(id);
        }
    }
};

module.exports = resolvers;
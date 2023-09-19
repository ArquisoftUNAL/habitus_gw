const resolvers = {
    Query: {
        categories: async (_, __, { dataSources }) => {
            return dataSources.habitsAPI.getAllCategories();
        },

        categoryById: async (_, { catId }, { dataSources }) => {
            return dataSources.habitsAPI.getCategoryById(catId);
        }
    },

    Mutation: {
        addCategory: async (_, { categoryData }, { dataSources }) => {
            return dataSources.habitsAPI.addCategory(categoryData);
        },

        updateCategory: async (_, { catId, categoryData }, { dataSources }) => {
            return dataSources.habitsAPI.updateCategory(catId, categoryData);
        },

        deleteHabit: async (_, { catId }, { dataSources }) => {
            return dataSources.habitsAPI.deleteCategory(catId);
        }
    }
};

module.exports = resolvers;
const typeDefs = `#graphql
    type Category {
        cat_id: String!
        cat_name: String!
    }

    input CategoryCreate {
        name: String!
    }

    input CategoryUpdate {
        name: String
    }

    extend type Query {
        categories: [Category]
        categoryById(catId: String!): Category
    }

    extend type Mutation {
        addCategory(category: CategoryCreate!): CreationResponse

        updateCategory(catId: String!, category: CategoryUpdate!): GeneralResponse

        deleteCategory(catId: String!): GeneralResponse
    }
`;

module.exports = typeDefs;
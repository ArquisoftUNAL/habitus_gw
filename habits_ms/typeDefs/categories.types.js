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
        categories(page: Int, per_page: Int): [Category]
        categoryById(id: String!): Category
    }

    extend type Mutation {
        addCategory(category: CategoryCreate!): CreationResponse

        updateCategory(id: String!, category: CategoryUpdate!): GeneralResponse

        deleteCategory(id: String!): GeneralResponse
    }
`;

module.exports = typeDefs;
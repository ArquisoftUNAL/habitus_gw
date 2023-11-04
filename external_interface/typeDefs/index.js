module.exports = `#graphql
    type Category {
        cat_id: String!
        cat_name: String!
    }

    type SOAPCategoriesResponse {
        categories: [Category!]!
    }

    extend type Query {
        getExternalCategories: SOAPCategoriesResponse!
    }
`;

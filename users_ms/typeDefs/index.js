module.exports = `#graphql
    type User {
        _id : String!
        name: String!
        email: String!
        birthDay: String!
    }

    input UserCreate {
        first_name: String!
        last_name: String!
        email: String!
        password: String!
    }

    extend type Query {
        getCurrentUser(jwt: String!): User
    }

    extend type Mutation {
        createUser(user: UserCreate!): User
    }
`;

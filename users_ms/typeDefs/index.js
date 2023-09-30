module.exports = `#graphql
    type User {
        _id : String
        name: String
        email: String
        birthDay: String
        jwt : String
    }

    input UserCreate {
        name: String
        email: String!
        password: String!
        birthDay: String
    }

    extend type Query {
        getCurrentUser(jwt: String!): User
        validateToken(jwt: String!): Boolean
    }

    extend type Mutation {
        createUser(user: UserCreate!): User
        loginUser(user: UserCreate!): String!
    }
`;

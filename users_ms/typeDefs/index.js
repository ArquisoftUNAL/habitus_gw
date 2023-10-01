module.exports = `#graphql
    type User {
        _id : String
        name: String
        email: String
        birthDay: String
        jwt : String
        isAdmin: Boolean
    }

    input UserCreate {
        name: String!
        email: String!
        password: String!
        birthDay: String
    }

    input UserLogin {
        email: String!
        password: String!
    }

    extend type Query {
        getCurrentUser: User
        validateToken: Boolean
    }

    extend type Mutation {
        createUser(user: UserCreate!): User
        loginUser(user: UserLogin!): String!
        deleteUser: User
    }
`;

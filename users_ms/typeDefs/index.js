module.exports = `#graphql
    type User {
        _id : String
        name: String
        email: String
        birthDay: String
        jwt : String
        isAdmin: Boolean
    }

    type SimpleMessage {
        message: String!
    }

    input UserCreate {
        name: String!
        email: String!
        password: String!
        birthDay: String
    }

    input UserUpdate {
        name: String
        email: String
        password: String
        birthDay: String
    }

    input UserLogin {
        email: String!
        password: String!
    }

    extend type Query {
        getCurrentUser: User
        validateToken: Boolean
        getUserById(id : String!): User
    }

    extend type Mutation {
        createUser(user: UserCreate!): User
        updateUser(user: UserUpdate!): User
        loginUser(user: UserLogin!): String!
        logoutUser: SimpleMessage
        deleteUser: User
    }
`;

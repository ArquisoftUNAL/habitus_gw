const typeDefs = `#graphql
    type User {
        _id : Int!
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
        getUserById(id: Int!): [User]
        
    }

    extend type Mutation {
        createUser(user: UserCreate!): User
    }

`;

module.exports = typeDefs;
const typeDefs = `#graphql

    extend type Query {
        # No actual response
        habitOwnership(id: String!): Boolean
    }
`;

module.exports = typeDefs;
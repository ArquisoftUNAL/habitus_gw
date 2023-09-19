const habitsMsTypesDefs = require('./../habits_ms/typeDefs');
const usersMsTypesDefs = require('./../users_ms/typeDefs');

const root = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const typeDefs = [root, habitsMsTypesDefs, usersMsTypesDefs];

module.exports = typeDefs;
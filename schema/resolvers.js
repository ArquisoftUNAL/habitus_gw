const habitsMsResolvers = require('./../habits_ms/resolvers');
const usersMsResolvers = require('./../users_ms/resolvers');

const resolvers = {
    Query: {
        ...habitsMsResolvers.Query,
        ...usersMsResolvers.Query
    },
    Mutation: {
        ...habitsMsResolvers.Mutation,
        ...usersMsResolvers.Mutation
    }
}

module.exports = resolvers;
const habitsMsResolvers = require('./../habits_ms/resolvers');

const resolvers = {
    Query: {
        ...habitsMsResolvers.Query
    },
    Mutation: {
        ...habitsMsResolvers.Mutation
    }
}

module.exports = resolvers;
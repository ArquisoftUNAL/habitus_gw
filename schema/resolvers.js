const habitsMsResolvers = require('./../habits_ms/resolvers');
const usersMsResolvers = require('./../users_ms/resolvers');
const statisticsMsResolvers = require('./../statistics_ms/resolvers');
const { GraphQLJSONObject } = require("graphql-type-json");

const resolvers = {
    JSONObject: GraphQLJSONObject,
    Query: {
        ...habitsMsResolvers.Query,
        ...usersMsResolvers.Query,
        ...statisticsMsResolvers.Query
    },
    Mutation: {
        ...habitsMsResolvers.Mutation,
        ...usersMsResolvers.Mutation,
        ...statisticsMsResolvers.Mutation
    }
}

module.exports = resolvers;
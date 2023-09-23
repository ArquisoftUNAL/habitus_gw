const habitsMsResolvers = require('./../habits_ms/resolvers');
const usersMsResolvers = require('./../users_ms/resolvers');
const statisticsMsResolvers = require('./../statistics_ms/resolvers');
const notificationsMsResolvers = require('./../notifications_ms/resolvers');
const { GraphQLJSONObject } = require("graphql-type-json");

const resolvers = {
    JSONObject: GraphQLJSONObject,
    Query: {
        ...habitsMsResolvers.Query,
        ...usersMsResolvers.Query,
        ...statisticsMsResolvers.Query,
        ...notificationsMsResolvers.Query
    },
    Mutation: {
        ...habitsMsResolvers.Mutation,
        ...usersMsResolvers.Mutation,
        ...statisticsMsResolvers.Mutation,
        ...notificationsMsResolvers.Mutation
    }
}

module.exports = resolvers;
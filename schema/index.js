const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const { mutation: habitsMutation, query: habitsQuery } = require('./habits_ms');
const { mutation: usersMutation, query: usersQuery } = require('./users_ms');

const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        ...habitsQuery,
        ...usersQuery,
    })
});


const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        ...habitsMutation,
        ...usersMutation,
    })
});

module.exports = new GraphQLSchema({
    query,
    mutation,
});

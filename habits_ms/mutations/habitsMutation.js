const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
} = require("graphql");
const UserType = require("./UserType");
const axios = require("axios");

const HabitsMutation = new GraphQLObjectType({
    name: "HabitsMutation",
    fields: {
        createUser: {
            type: UserType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    password: args.password,
                });
                return args;
            },
        },
    },
});

module.exports = HabitsMutation;
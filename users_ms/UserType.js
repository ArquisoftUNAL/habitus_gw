const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} = require("graphql");


const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    _id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    birthDay: { type: GraphQLString },
  }),
});

module.exports = UserType;

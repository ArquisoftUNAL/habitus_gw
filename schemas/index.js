const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");
const userData = require("../MOCK_DATA.json");
const UserType = require("./TypeDefs/UserType");
const axios = require("axios");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      async resolve(parent, args) {
        if (args.id) {
          const headers = {
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTA3YmNmMDZhMWFlMWFkOTZlMzc4ODAiLCJfaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY5NTAwNTkzNiwiZXhwIjoxNjk1MDQ5MTM2fQ.Hb2ADAssYwNVT0Z3w_tB6bszOHaqga7it68bZpYzfaM",
          };
          // Include axios async call
          const response = await axios.get(
            "http://localhost:3000/api/users/6507bcf06a1ae1ad96e37880",
            {
              headers,
            }
          );
          console.log(response.data);

          // Wrap the response data in an array
          return [response.data]; // Wrap the data in an array
        }

        return [userData]; // Wrap the userData in an array
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
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

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

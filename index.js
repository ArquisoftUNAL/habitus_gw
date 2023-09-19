const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs, resolvers } = require('./schema');
const HabitsAPI = require('./habits_ms/api')
const UsersAPI = require('./users_ms/api')

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

(async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    habitsAPI: new HabitsAPI({ cache }),
                    usersAPI: new UsersAPI({ cache })
                }
            }
        }
    });

    console.log(`🚀 Server ready at ${url}`);
})();
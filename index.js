const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs, resolvers } = require('./schema');
const amqpSub = require('./ampq');
const HabitsAPI = require('./habits_ms/api');
const UsersAPI = require('./users_ms/api');
const StatisticsAPI = require('./statistics_ms/api');
const AchievementsAPI = require("./achievements_ms/api");

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 4000;

(async () => {
    // Try to connect to RabbitMQ
    let pubsub;

    try {
        pubsub = await amqpSub();
    }
    catch (err) {
        console.log("Error connecting to RabbitMQ");
        console.log(err);
        pubsub = null;
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        subscriptions: {
            onConnect: () => ({ pubsub }),
            onDisconnect: () => console.log("Disconnected from RabbitMQ")
        },
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
        context: async () => {
            const { cache } = server;
            return {
                dataSources: {
                    habitsAPI: new HabitsAPI({ cache }),
                    usersAPI: new UsersAPI({ cache }),
                    statisticsAPI: new StatisticsAPI({ cache }),
                    achievementsAPI: new AchievementsAPI({ cache }),
                    queueMQ: pubsub
                }
            }
        }
    });

    console.log(`🚀 Server ready at ${url}`);
})();
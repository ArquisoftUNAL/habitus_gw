const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { typeDefs, resolvers } = require('./schema');
const { amqpNotifications, amqpHabits } = require('./ampq');
const HabitsAPI = require('./habits_ms/api');
const UsersAPI = require('./users_ms/api');
const StatisticsAPI = require('./statistics_ms/api');
const AchievementsAPI = require("./achievements_ms/api");
const NotificationsAPI = require('./notifications_ms/api');
const { PORT } = require('./config');

(async () => {
    // Try to connect to RabbitMQ
    let notificationsQueue, habitsQueue;

    try {
        notificationsQueue = await amqpNotifications();
    }
    catch (err) {
        console.log("Error connecting to RabbitMQ (Notifications)");
        console.log(err);
        notificationsQueue = null;
    }

    try {
        habitsQueue = await amqpHabits();
    }
    catch (err) {
        console.log("Error connecting to RabbitMQ (Habits updates)");
        console.log(err);
        habitsQueue = null;
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // subscriptions: {
        //     onConnect: () => ({ habitsQueue, notificationsQueue }),
        //     onDisconnect: () => console.log("Disconnected from RabbitMQ")
        // },
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
        context: async ({ req, res }) => {

            const { cache } = server;

            const dataSources = {
                habitsAPI: new HabitsAPI({ cache }),
                usersAPI: new UsersAPI({ cache }),
                statisticsAPI: new StatisticsAPI({ cache }),
                achievementsAPI: new AchievementsAPI({ cache }),
                notificationsAPI: new NotificationsAPI({ cache }),
                notificationsQueue: notificationsQueue,
                habitsQueue: habitsQueue
            }

            // Get token and try to authenticate user
            const token = req.headers['x-auth-token'];
            let userId = null;
            let isAdmin = false;

            if (token) {
                try {
                    const user = await dataSources.usersAPI.getCurrentUser(token);
                    userId = user._id;
                    isAdmin = user.isAdmin;
                } catch (e) { }
            }

            return { dataSources, userId, isAdmin, token };
        }
    });

    console.log(`🚀 Server ready at ${url}`);
})();
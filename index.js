const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const { expressMiddleware } = require('@apollo/server/express4');
const { typeDefs, resolvers } = require('./schema');
const { amqpNotifications, amqpHabits } = require('./ampq');
const HabitsAPI = require('./habits_ms/api');
const UsersAPI = require('./users_ms/api');
const StatisticsAPI = require('./statistics_ms/api');
const AchievementsAPI = require("./achievements_ms/api");
const NotificationsAPI = require('./notifications_ms/api');
const ExternalInterfaceAPI = require('./external_interface/api');
const { PORT, cache: serverCache } = require('./config');
const express = require('express');
const cors = require('cors');
const http = require('http');

(async () => {
    const app = express();
    const httpServer = http.createServer(app);
    const corsOptions = {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: false,
        optionsSuccessStatus: 204
    };

    //(async () => {
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
        serverHealthCheckPath: '/healthcheck',
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        csrfPrevention: false,
    });

    await server.start();

    const externalInterfaceAPI = new ExternalInterfaceAPI();

    // Pass context to the resolvers
    const context = async ({ req }) => {
        const { cache } = server;

        const dataSources = {
            habitsAPI: new HabitsAPI({ cache }),
            usersAPI: new UsersAPI({ cache }),
            statisticsAPI: new StatisticsAPI({ cache }),
            achievementsAPI: new AchievementsAPI({ cache }),
            notificationsAPI: new NotificationsAPI({ cache }),
            externalInterfaceAPI: externalInterfaceAPI,
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
            } catch (e) {
                console.log("Error authenticating user");
                console.log(e);

                // If token is invalid, delete it from cache
                userId = null;
                isAdmin = false;
            }
        }

        // Authorize user against users microservice and it's authorization modul
        let permissions = serverCache.get("permissions") || null;

        if (!permissions) {
            // Query permissions against database
            permissions = await dataSources.usersAPI.getAllPermissions();

            // Save permissions in cache
            serverCache.set("permissions", permissions);
        }

        const role = userId ? (isAdmin ? "admin" : "user") : "guest";

        return { dataSources, userId, isAdmin, token, permissions, role };
    };

    app.use(
        '/',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: context,
        })
    );

    httpServer.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
})();
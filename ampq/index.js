const { AMQPPubSub } = require('graphql-amqp-subscriptions');
const amqp = require("amqplib");
const {
    QUEUE_URL, NOTIFICATIONS_QUEUE, HABITS_UPDATE_QUEUE,
    NOTIFICATIONS_EXCHANGE, HABITS_UPDATE_EXCHANGE,
    NOTIFICATIONS_QUEUE_USERNAME, NOTIFICATIONS_QUEUE_PASSWORD,
    HABITS_UPDATE_QUEUE_USERNAME, HABITS_UPDATE_QUEUE_PASSWORD
} = require('./../config');

const amqpNotifications = () =>
    new Promise((resolve, reject) =>
        amqp
            .connect({
                protocol: "amqp",
                hostname: QUEUE_URL,
                port: 5672,
                username: NOTIFICATIONS_QUEUE_USERNAME,
                password: NOTIFICATIONS_QUEUE_PASSWORD,
                locale: "en_US",
                frameMax: 0,
                heartbeat: 0,
                vhost: "/",
            })
            .then((conn) => {
                const pubsub = new AMQPPubSub({
                    connection: conn,
                    queue: {
                        name: NOTIFICATIONS_QUEUE,
                        options: {
                            exclusive: true,
                            durable: true,
                        },
                    },
                    exchange: {
                        name: NOTIFICATIONS_EXCHANGE,
                        type: "direct",
                        options: {
                            durable: true,
                        },
                    }
                });

                // Listen for connection errors and close events
                conn.on("error", (err) => {
                    console.error(err);
                });

                conn.on("close", () => {
                    console.log("Connection to RabbitMQ closed");
                });

                return pubsub;
            })
            .then((pubsub) => resolve(pubsub))
            .catch((err) => reject(err))
    );

const amqpHabits = () =>
    new Promise((resolve, reject) =>
        amqp
            .connect({
                protocol: "amqp",
                hostname: QUEUE_URL,
                port: 5672,
                username: HABITS_UPDATE_QUEUE_USERNAME,
                password: HABITS_UPDATE_QUEUE_PASSWORD,
                locale: "en_US",
                frameMax: 0,
                heartbeat: 0,
                vhost: "/",
            })
            .then((conn) => {
                const pubsub = new AMQPPubSub({
                    connection: conn,
                    queue: {
                        name: HABITS_UPDATE_QUEUE,
                        options: {
                            exclusive: true,
                            durable: true,
                        },
                    },
                    exchange: {
                        name: HABITS_UPDATE_EXCHANGE,
                        type: "direct",
                        options: {
                            durable: true,
                        },
                    }
                });

                // Listen for connection errors and close events
                conn.on("error", (err) => {
                    console.error(err);
                });

                conn.on("close", () => {
                    console.log("Connection to RabbitMQ closed");
                });

                return pubsub;
            })
            .then((pubsub) => resolve(pubsub))
            .catch((err) => reject(err))
    );
module.exports = {
    amqpNotifications,
    amqpHabits
};
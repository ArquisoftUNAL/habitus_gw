const { AMQPPubSub } = require('graphql-amqp-subscriptions');
const amqp = require("amqplib");
const { QUEUE_URL } = require('./../config');


const amqpSub = () =>
    new Promise((resolve, reject) =>
        amqp
            .connect(QUEUE_URL)
            .then((conn) => {
                const pubsub = new AMQPPubSub({
                    connection: conn,
                    exchange: {
                        name: "habitus_exchange",
                        type: "topic",
                        options: {
                            durable: false,
                        },
                    },
                    queue: {
                        name: "",
                        options: {
                            exclusive: true,
                            durable: true,
                        },
                    },
                });
                return pubsub;
            })
            .then((pubsub) => resolve(pubsub))
            .catch((err) => reject(err))
    );

module.exports = amqpSub;
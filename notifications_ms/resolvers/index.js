const { NOTIFICATIONS_QUEUE } = require('./../../config');

const resolvers = {
    Query: {
    },

    Mutation: {
        enqueueNotification: async (_, { data }, { dataSources }) => {
            // Enqueue notification
            dataSources.queueMQ.publish(NOTIFICATIONS_QUEUE, data);

            return {
                message: "Notification enqueued"
            };
        }
    }
};

module.exports = resolvers;
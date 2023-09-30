const { NOTIFICATIONS_QUEUE } = require('./../../config');

const resolvers = {
    Query: {
    },

    Mutation: {
        enqueueNotification: async (_, { data }, { dataSources }) => {
            // Enqueue notification
            for (const notification of data) {
                if (!notification.user_id || !notification.title || !notification.body) {
                    return {
                        message: "Invalid notification data"
                    };
                }

                try {
                    await dataSources.notificationsQueue.publish(NOTIFICATIONS_QUEUE, notification);
                } catch (err) {
                    console.log(err);

                    return {
                        message: "Error enqueuing notifications"
                    };
                }

            }

            return {
                message: "Notifications enqueued"
            };
        }
    }
};

module.exports = resolvers;
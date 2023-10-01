const { NOTIFICATIONS_QUEUE } = require('./../../config');

const resolvers = {
    Query: {
        getNotifications: (_, __, { dataSources }) => {
            return dataSources.notificationsAPI.getNotifications();
        },

        getNotification: (_, { id }, { dataSources }) => {
            return dataSources.notificationsAPI.getNotification(id);
        },

        getNotificationsUser: (_, __, { dataSources, userId }) => {
            return dataSources.notificationsAPI.getNotificationsUser(userId);
        }
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
        },

        addNotification: async (_, { data }, { dataSources }) => {
            return dataSources.notificationsAPI.addNotification(data);
        },

        updateNotification: async (_, { data }, { dataSources }) => {
            return dataSources.notificationsAPI.updateNotification(data);
        },

        deleteNotification: async (_, { id }, { dataSources }) => {
            return dataSources.notificationsAPI.deleteNotification(id);
        }
    }
};

module.exports = resolvers;
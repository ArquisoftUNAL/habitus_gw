const { NOTIFICATIONS_QUEUE } = require('./../../config');
const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        getNotifications: (_, __, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "getNotifications");
            return dataSources.notificationsAPI.getNotifications();
        },

        getNotification: (_, { id }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "getNotification");
            return dataSources.notificationsAPI.getNotification(id);
        },

        getNotificationsUser: (_, __, { dataSources, userId, permissions, role }) => {
            validatePermissions(permissions, role, "getNotificationsUser");
            return dataSources.notificationsAPI.getNotificationsUser(userId);
        }
    },

    Mutation: {
        enqueueNotification: async (_, { data }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "enqueueNotification");
            // Enqueue notification
            for (const notification of data) {
                if (!notification.user_id || !notification.title || !notification.body) {
                    return {
                        message: "Invalid notification data"
                    };
                }

                try {
                    const userData = await dataSources.usersAPI.getUserById(notification.user_id);

                    await dataSources.notificationsQueue.publish(NOTIFICATIONS_QUEUE, {
                        ...notification,
                        email: userData.email
                    });
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

        addNotification: async (_, { data }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "addNotification");
            return dataSources.notificationsAPI.addNotification(data);
        },

        updateNotification: async (_, { data }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "updateNotification");
            return dataSources.notificationsAPI.updateNotification(data);
        },

        deleteNotification: async (_, { id }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "deleteNotification");
            return dataSources.notificationsAPI.deleteNotification(id);
        }
    }
};

module.exports = resolvers;
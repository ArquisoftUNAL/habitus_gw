const typeDefs = `#graphql
    type Notification {
        noti_id: String
        noti_title: String!
        noti_body: String!
        noti_init_date: String!
        noti_type: String!
        noti_active: Boolean!
        noti_should_email: Boolean!
        noti_email: String!
        usr_id: String!
    }

    type OperationOutput {
        message: String!
    }

    input NotificationQueueInsert {
        title: String!
        body: String!
        init_date: String!
        should_email: Boolean!
        email: String!
        user_id: String!
    }

    input NotificationInsert {
        noti_title: String!
        noti_body: String!
        noti_init_date: String!
        noti_type: String!
        noti_active: Boolean!
        noti_should_email: Boolean!
        noti_email: String!
        usr_id: String!
    }

    extend type Query {
        getNotifications: [Notification]!
        getNotification(id: String!): Notification!
        getNotificationsUser: [Notification]!
    }

    extend type Mutation {
        enqueueNotification(data: [NotificationQueueInsert!]!): OperationOutput
        addNotification(data: NotificationInsert!): OperationOutput
        updateNotification(id: String!, data: NotificationInsert!): OperationOutput
        deleteNotification(id: String!): OperationOutput
    }
`;
module.exports = typeDefs;
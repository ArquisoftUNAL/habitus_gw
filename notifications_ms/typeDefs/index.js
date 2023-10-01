const typeDefs = `#graphql
    type Notification {
        not_id: String!
        not_title: String!
        not_body: String!
        not_init_date: String!
        not_type: String!
        not_active: Boolean!
        not_should_email: Boolean!
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
        user_id: String!
    }

    input NotificationInsert {
        not_title: String!
        not_body: String!
        not_init_date: String!
        not_type: String!
        not_active: Boolean!
        not_should_email: Boolean!
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
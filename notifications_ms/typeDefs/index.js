const typeDefs = `#graphql
    type OperationOutput {
        message: String!
    }

    input NotificationInsert {
        title: String!
        body: String!
        init_date: String!
        should_email: Boolean!
        user_id: String!
    }

    extend type Mutation {
        enqueueNotification(data: [NotificationInsert!]!): OperationOutput
    }
`;
module.exports = typeDefs;
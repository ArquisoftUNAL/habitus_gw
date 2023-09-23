const resolvers = {
    Query: {
    },

    Mutation: {
        enqueueNotification: async (_, { data }, { dataSources }) => {
            console.log(data);

            // TODO: Enqueue notifications in RabbitMQ
            return {
                message: "Notifications sent!"
            }
        }
    }
};

module.exports = resolvers;
const typeDefs = `#graphql
    type Event {
        date: String!
    }

    extend type Query {
        eventsByHabit(id: String!, limit: Int, start_date: String, end_date: String): [Event]
    }
`;

module.exports = typeDefs;
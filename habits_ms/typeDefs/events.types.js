const typeDefs = `#graphql
    type EventWithHabit {
        date: String!
        habit: Habit!
        recurrence: Recurrence!
    }

    type EventWithCount {
        date: String!
        count: Int!
    }

    type EventWithRecurrence {
        date: String!
        recurrence: Recurrence!
    }

    extend type Query {
        eventsWithHabits(id: String!, limit: Int, start_date: String, end_date: String): [EventWithHabit]
        eventsWithCount(id: String!, start_date: String, end_date: String): [EventWithCount]
        eventsFromHabit(id: String!, limit: Int, start_date: String, end_date: String): [EventWithRecurrence]
    }
`;

module.exports = typeDefs;
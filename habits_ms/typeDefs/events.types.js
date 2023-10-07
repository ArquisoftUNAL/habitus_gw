const typeDefs = `#graphql
    type Event {
        date: String!
    }
    
    type CalendarEvent {
        date: String!
        data: Float!
        relative_frequency: Float!
    }

    extend type Query {
        eventsByHabit(id: String!, limit: Int, start_date: String, end_date: String): [Event!]!
        calendarEventsByHabit(id: String!, start_date: String, end_date: String): [CalendarEvent!]!
        calendarEventsByUser(start_date: String, end_date: String): [CalendarEvent!]!
    }
`;

module.exports = typeDefs;
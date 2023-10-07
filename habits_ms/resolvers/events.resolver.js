const resolvers = {
    Query: {
        eventsByHabit: async (_, { id, limit, start_date, end_date }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getEventsByHabit(userId, isAdmin, id, start_date, end_date, limit);
        },

        calendarEventsByHabit: async (_, { id, start_date, end_date }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getCalendarEventsByHabit(userId, isAdmin, id, start_date, end_date);
        },

        calendarEventsByUser: async (_, { start_date, end_date }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getCalendarEventsByUser(userId, isAdmin, start_date, end_date);
        }
    }
};

module.exports = resolvers;
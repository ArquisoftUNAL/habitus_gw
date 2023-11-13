const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        eventsByHabit: async (_, { id, limit, start_date, end_date }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "eventsByHabit");
            return dataSources.habitsAPI.getEventsByHabit(userId, isAdmin, id, start_date, end_date, limit);
        },

        calendarEventsByHabit: async (_, { id, start_date, end_date }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "calendarEventsByHabit");
            return dataSources.habitsAPI.getCalendarEventsByHabit(userId, isAdmin, id, start_date, end_date);
        },

        calendarEventsByUser: async (_, { start_date, end_date }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "calendarEventsByUser");
            return dataSources.habitsAPI.getCalendarEventsByUser(userId, isAdmin, start_date, end_date);
        }
    }
};

module.exports = resolvers;
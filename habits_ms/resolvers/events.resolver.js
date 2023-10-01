const resolvers = {
    Query: {
        eventsByHabit: async (_, { id, limit, start_date, end_date }, { dataSources, userId, isAdmin, }) => {
            return dataSources.habitsAPI.getEventsByHabit(userId, isAdmin, id, start_date, end_date, limit);
        }
    }
};

module.exports = resolvers;
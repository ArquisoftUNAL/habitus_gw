const resolvers = {
    Query: {
        eventsByHabit: async (_, { id, limit, start_date, end_date }, { dataSources }) => {
            return dataSources.habitsAPI.getEventsByHabit(id, start_date, end_date, limit);
        }
    }
};

module.exports = resolvers;
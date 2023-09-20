const resolvers = {
    Query: {
        eventsWithHabits: async (_, { id, limit, start_date, end_date }, { dataSources }) => {
            return dataSources.habitsAPI.getEventsWithHabits(id, start_date, end_date, limit);
        },

        eventsWithCount: async (_, { id, start_date, end_date }, { dataSources }) => {
            return dataSources.habitsAPI.getEventsCount(id, start_date, end_date);
        },

        eventsFromHabit: async (_, { id, limit, start_date, end_date }, { dataSources }) => {
            return dataSources.habitsAPI.getHabitEvents(id, start_date, end_date, limit);
        },
    }
};

module.exports = resolvers;
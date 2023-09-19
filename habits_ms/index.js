const HabitsQuery = require('./queries/habitsQuery');
const HabitsMutation = require('./mutations/habitsMutation');

module.exports = {
    query: HabitsQuery,
    mutation: HabitsMutation,
};
const habitsResolver = require('./habits.resolver');
const categoriesResolver = require('./categories.resolver');
const recurrencesResolver = require('./recurrences.resolver');
const habitsDataResolver = require('./habitsdata.resolver');
const eventsResolver = require('./events.resolver');

const response = {
    Query: {
        ...habitsResolver.Query,
        ...categoriesResolver.Query,
        ...recurrencesResolver.Query,
        ...habitsDataResolver.Query,
        ...eventsResolver.Query
    },
    Mutation: {
        ...habitsResolver.Mutation,
        ...categoriesResolver.Mutation,
        ...recurrencesResolver.Mutation,
        ...habitsDataResolver.Mutation,
        ...eventsResolver.Mutation
    }
};

module.exports = response;
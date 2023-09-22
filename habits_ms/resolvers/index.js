const habitsResolver = require('./habits.resolver');
const categoriesResolver = require('./categories.resolver');
const habitsDataResolver = require('./habitsdata.resolver');
const eventsResolver = require('./events.resolver');

const response = {
    Query: {
        ...habitsResolver.Query,
        ...categoriesResolver.Query,
        ...habitsDataResolver.Query,
        ...eventsResolver.Query
    },
    Mutation: {
        ...habitsResolver.Mutation,
        ...categoriesResolver.Mutation,
        ...habitsDataResolver.Mutation,
        ...eventsResolver.Mutation
    }
};

module.exports = response;
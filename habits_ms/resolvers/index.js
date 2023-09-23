const habitsResolver = require('./habits.resolver');
const categoriesResolver = require('./categories.resolver');
const habitsDataResolver = require('./habitsdata.resolver');
const eventsResolver = require('./events.resolver');
const ownershipResolver = require('./ownership.resolver');

const response = {
    Query: {
        ...habitsResolver.Query,
        ...categoriesResolver.Query,
        ...habitsDataResolver.Query,
        ...eventsResolver.Query,
        ...ownershipResolver.Query
    },
    Mutation: {
        ...habitsResolver.Mutation,
        ...categoriesResolver.Mutation,
        ...habitsDataResolver.Mutation,
        ...eventsResolver.Mutation,
        ...ownershipResolver.Mutation
    }
};

module.exports = response;
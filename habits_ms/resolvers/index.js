const habitsResolver = require('./habits.resolver');

const response = {
    Query: {
        ...habitsResolver.Query
    },
    Mutation: {
        ...habitsResolver.Mutation
    }
};

module.exports = response;
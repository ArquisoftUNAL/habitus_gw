const achievementsResolver = require('./achievements.resolver');
const milestonesResolver = require('./milestones.resolver');

const response = {
    Query: {
        ...achievementsResolver.Query,
        ...milestonesResolver.Query
    },
    Mutation: {
        ...achievementsResolver.Mutation,
        ...milestonesResolver.Mutation
    }
};

module.exports = response;
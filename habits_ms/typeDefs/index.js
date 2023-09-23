const habitsTypeDefs = require('./habits.types');
const categoriesTypeDefs = require('./categories.types');
const habitsDataTypeDefs = require('./habitsdata.types');
const eventsTypeDefs = require('./events.types');
const ownershipTypeDefs = require('./ownership.types');

const typeDefs = `#graphql
    type CreationResponse {
        message: String!
        id: String!
    }

    type GeneralResponse {
        message: String!
    }

    ${habitsTypeDefs}
    ${categoriesTypeDefs}
    ${habitsDataTypeDefs}
    ${eventsTypeDefs}
    ${ownershipTypeDefs}
`;

module.exports = typeDefs;
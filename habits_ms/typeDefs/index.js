const habitsTypeDefs = require('./habits.types');
const categoriesTypeDefs = require('./categories.types');
const recurrencesTypeDefs = require('./recurrences.types');
const habitsDataTypeDefs = require('./habitsdata.types');
const eventsTypeDefs = require('./events.types');

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
    ${recurrencesTypeDefs}
    ${habitsDataTypeDefs}
    ${eventsTypeDefs}
`;

module.exports = typeDefs;
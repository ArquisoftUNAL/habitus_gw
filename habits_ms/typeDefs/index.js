const habitsTypeDefs = require('./habits.types');

const typeDefs = `
    type CreationResponse {
        message: String!
        id: String!
    }

    type GeneralResponse {
        message: String!
    }

    ${habitsTypeDefs}
`;

module.exports = typeDefs;
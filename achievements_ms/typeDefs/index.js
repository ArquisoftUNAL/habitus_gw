const achievementsTypeDefs = require('./achievements.types');
const milestonesTypeDefs = require('./milestones.types');

const typeDefs = `#graphql

    type MessageResponse {
        status: Int
        message: String!
    }

    ${achievementsTypeDefs}
    ${milestonesTypeDefs}
`;

module.exports = typeDefs;
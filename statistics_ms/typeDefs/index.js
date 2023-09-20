const measureTypeDefs = require('./measure.types');
const ynTypeDefs = require('./yn.types');
const reportTypeDefs = require('./report.types');

const typeDefs = `#graphql

    type HabitFreqWeekday {
        data: JSONObject
    }

    extend type Query {
        freqWeekdayHabit(id : String!): [HabitFreqWeekday]
    }

    ${measureTypeDefs}
    ${ynTypeDefs}
    ${reportTypeDefs}
`;

module.exports = typeDefs;
const typeDefs = `#graphql

    type YnResumeData {
        month: Float!
        semester: Float!
        year: Float!
        total: Int!
    }

    type YnHistoryTimeData {
        data: JSONObject
    }

    type YnHistoryData {
        week: YnHistoryTimeData!
        month: YnHistoryTimeData!
        semester: YnHistoryTimeData!
        year: YnHistoryTimeData!
    }

    type YnStreak {
        data: JSONObject
    }

    extend type Query {
        resumeYnHabit(id : String!): YnResumeData!
        historyYnHabit(id : String!): YnHistoryData!
        streakYnHabit(id : String!): YnStreak!
    }
`;

module.exports = typeDefs;
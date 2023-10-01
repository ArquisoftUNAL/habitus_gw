const typeDefs = `#graphql
    type MeasureResumeTimeData {
        percentage: Float!
        progress: Float!
        remaining: Float!
    }

    type MeaasureResumeData {
        toDay: MeasureResumeTimeData!
        week: MeasureResumeTimeData!
        month: MeasureResumeTimeData!
        semester: MeasureResumeTimeData!
        year: MeasureResumeTimeData!
    }

    type MeasureHistoryTimeData {
        data: JSONObject
    }

    type MeasureHistoryData {
        day: MeasureHistoryTimeData!
        week: MeasureHistoryTimeData!
        month: MeasureHistoryTimeData!
        semester: MeasureHistoryTimeData!
        year: MeasureHistoryTimeData!
    }

    type MeasureStreak {
        data: JSONObject
    }

    extend type Query {
        resumeMeasureHabit(id : String!): MeaasureResumeData!
        historyMeasureHabit(id : String!): MeasureHistoryData!
        measureStreaks(id : String!): MeasureStreak!
    }
`;

module.exports = typeDefs;
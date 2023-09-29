const typeDefs = `#graphql

    type ReportMeasureData {
        resume: MeaasureResumeData!
        history: MeasureHistoryData!
        days_frequency: HabitFreqWeekday!
    }

    type ReportYnData {
        resume: YnResumeData!
        history: YnHistoryData!
        streaks: YnStreak!
        days_frequency: HabitFreqWeekday!
    }

    extend type Query {
        reportMeasureHabit(id : String!): ReportMeasureData!
        reportYnHabit(id: String!): ReportYnData!
    }
`;

module.exports = typeDefs;
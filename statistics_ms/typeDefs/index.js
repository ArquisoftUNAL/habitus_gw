const typeDefs = `#graphql

    # Measurable habits case
    type MeasureResumeItem {
        percentage: Float!
        progress: Float!
        remaining: Float!
    }

    type MeasureResume {
        toDay: MeasureResumeItem
        week: MeasureResumeItem
        month: MeasureResumeItem
        semester: MeasureResumeItem
        year: MeasureResumeItem
    }

    type MeasureHistoryDataItem {
        year: Float
        month: Float
        day: Float
        value: Float
    }

    type MeasureHistoryData {
        data: [MeasureHistoryDataItem!]!
    }

    type MeasureHistory {
        day: MeasureHistoryData!
        week: MeasureHistoryData!
        month: MeasureHistoryData!
        semester: MeasureHistoryData!
        year: MeasureHistoryData!
    }

    type MeasureStreakDataItem {
        start_date: String!
        end_date: String!
        quantity: Float!
    }

    type MeasureStreak {
        data: [MeasureStreakDataItem!]!
    }

    type MeasureDailyFrequencyDataItem {
        year: Float!
        month: Float!
        week_day: Float!
        quantity: Float!
    }

    type MeasureDailyFrequency {
        data: [MeasureDailyFrequencyDataItem!]!
    }

    type MeasureReport {
        resume: MeasureResume!
        history: MeasureHistory!
        streaks: MeasureStreak!
        days_frequency: MeasureDailyFrequency!
    }

    # Yes/No habits case
    type YNResume {
        month: Float!
        semester: Float!
        year: Float!
        total: Float!
    }

    type YNHistoryDataItem {
        year: Float
        week: Float
        month: Float
        semester: Float
        count: Float
    }

    type YNHistoryData {
        data: [YNHistoryDataItem!]!
    }

    type YNHistory {
        week: YNHistoryData!
        month: YNHistoryData!
        semester: YNHistoryData!
        year: YNHistoryData!
    }

    type YNStreakDataItem {
        start_date: String!
        end_date: String!
        quantity: Float!
    }

    type YNStreak {
        data: [YNStreakDataItem!]!
    }

    type YNDailyFrequencyDataItem {
        year: Float!
        month: Float!
        week_day: Float!
        quantity: Float!
    }

    type YNDailyFrequency {
        data: [YNDailyFrequencyDataItem!]!
    }

    type YNReport {
        resume: YNResume!
        history: YNHistory!
        streaks: YNStreak!
        days_frequency: YNDailyFrequency!
    }

    union Report = MeasureReport | YNReport

    extend type Query {
        habitReport(id: String!): Report!
    }
`;

module.exports = typeDefs;
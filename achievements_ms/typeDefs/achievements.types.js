const typeDefs = `#graphql
    type Achievement {
        id: String!
        name: String!
        currentStreak: Float!
        highestStreak: Float!
        habit: String!
    }

    type AchievementList {
        message: String!
        data: [Achievement!]!
    }

    type AchievementResponse {
        message: String!
        data: Achievement!
    }

    # Actual achievements ms types
    type StreakUpdatePairResponse {
        achievement: Achievement!
        milestoneList: [Milestone!]!
    }

    type StreakUpdatePartialResponse {
        message: String!
        data: [StreakUpdatePairResponse!]!
    }
    union StreakUpdateResponse = AchievementResponse | StreakUpdatePartialResponse

    input Streak {
        date_start: String!
        date_end: String!
        streak: Float!
    }

    # Faked achivements response for statistics ms
    type AchievementStatisticsStreakResponse {
        status: Int
        message: String
    }

    input AchievementCreate {
        name: String!
        habId: String!
        currentStreak: Float!
        highestStreak: Float!
    }

    input AchievementUpdate {
        name: String        
        currentStreak: Float
        highestStreak: Float
    }

    extend type Query {
        achievementsByHabit(id: String!, page: Int, per_page: Int): AchievementList!
    }

    extend type Mutation {
        addAchievement(achievement: AchievementCreate!): MessageResponse!
        deleteAchievement(id: String!): MessageResponse!
        updateAchievement(id: String!, achievement: AchievementUpdate!): AchievementResponse!
        updateStreak(id: String!, retainStreak: Boolean!): AchievementResponse!
        notifyStreakUpdate(hab_id: String!, freq_type: String!, streak: Streak!): AchievementStatisticsStreakResponse!
    }
`;

module.exports = typeDefs;
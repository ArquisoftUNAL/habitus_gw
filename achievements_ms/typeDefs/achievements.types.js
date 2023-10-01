const typeDefs = `#graphql
    type Achievement {
        id: String!
        name: String!
        currentStreak: Float!
        highestStreak: Float!
        lastCollection: String!
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

    input Streak {
        date_start: String!
        date_end: String!
        streak: Float!
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
        achievementsByHabit(id: String!): AchievementList!
    }

    extend type Mutation {
        addAchievement(achievement: AchievementCreate!): MessageResponse!
        deleteAchievement(id: String!): MessageResponse!
        updateAchievement(id: String!, achievement: AchievementUpdate!): AchievementResponse!
        updateStreak(id: String!, retainStreak: Boolean!): AchievementResponse!
        notifyStreakUpdate(hab_id: String!, streak: Streak!): MessageResponse!
    }
`;

module.exports = typeDefs;
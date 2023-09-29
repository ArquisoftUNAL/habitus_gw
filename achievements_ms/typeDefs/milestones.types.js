const typeDefs = `#graphql
    type Milestone {
        id: String!
        streak: Int!
        date: String!
        achievement: String!
    }

    type MilestoneList {
        message: String!
        data: [Milestone!]!
    }

    type MilestoneResponse {
        message: String!
        data: Milestone!
    }

    input MilestoneCreate {
        streak: Int!
        date: String!
        achId: String!
    }

    input MilestoneUpdate {
        streak: Int
        date: String
    }

    extend type Query {
        milestonesByAchievement(id: String!): MilestoneList!
    }

    extend type Mutation {
        addMilestone(milestone: MilestoneCreate!): MessageResponse!
        deleteMilestone(id: String!): MessageResponse!
        updateMilestone(id: String!, achievement: AchievementUpdate!): MilestoneResponse!
    }
`;

module.exports = typeDefs;
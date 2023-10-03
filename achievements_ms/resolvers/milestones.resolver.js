const resolvers = {
    Query: {
        milestonesByAchievement: async (_, { id, page, per_page }, { dataSources }) => {
            return dataSources.achievementsAPI.getAchievementMilestones(id, page, per_page);
        }
    },

    Mutation: {
        addMilestone: async (_, { milestone }, { dataSources }) => {
            return dataSources.achievementsAPI.addMilestone(milestone);
        },

        deleteMilestone: async (_, { id }, { dataSources }) => {
            return dataSources.achievementsAPI.deleteMilestone(id);
        },

        updateMilestone: async (_, { id, milestone }, { dataSources }) => {
            return dataSources.achievementsAPI.updateMilestone(id, milestone);
        }
    }
};

module.exports = resolvers;
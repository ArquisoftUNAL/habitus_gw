const resolvers = {
    Query: {
        milestonesByAchievement: async (_, { id }, { dataSources }) => {
            return dataSources.achievementsAPI.getAchievementMilestones(id);
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
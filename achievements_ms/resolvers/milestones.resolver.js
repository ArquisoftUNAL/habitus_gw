const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        milestonesByAchievement: async (_, { id, page, per_page }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "milestonesByAchievement");
            return dataSources.achievementsAPI.getAchievementMilestones(id, page, per_page);
        }
    },

    Mutation: {
        addMilestone: async (_, { milestone }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "addMilestone");
            return dataSources.achievementsAPI.addMilestone(milestone);
        },

        deleteMilestone: async (_, { id }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "deleteMilestone");
            return dataSources.achievementsAPI.deleteMilestone(id);
        },

        updateMilestone: async (_, { id, milestone }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "updateMilestone");
            return dataSources.achievementsAPI.updateMilestone(id, milestone);
        }
    }
};

module.exports = resolvers;
const { GraphQLError } = require('graphql');
const checkHabitOwnership = require('../../utils/checkHabitOwnership');
const validatePermissions = require('./../../utils/matchPermisssion');

const resolvers = {
    Query: {
        achievementsByHabit: async (_, { id, page, per_page }, { dataSources, userId, isAdmin, permissions, role }) => {

            validatePermissions(permissions, role, "achievementsByHabit");

            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.achievementsAPI.getHabitAchievements(id, page, per_page);
        }
    },

    Mutation: {
        addAchievement: async (_, { achievement }, { dataSources, userId, isAdmin, permissions, role }) => {

            validatePermissions(permissions, role, "addAchievement");

            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habId);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.achievementsAPI.addAchievement(achievement);
        },

        deleteAchievement: async (_, { id }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "deleteAchievement");
            return dataSources.achievementsAPI.deleteAchievement(id);
        },

        updateAchievement: async (_, { achievement }, { dataSources, userId, isAdmin, permissions, role }) => {
            validatePermissions(permissions, role, "updateAchievement");
            if (achievement.habId) {
                // Check first if user is allowed to access this habit
                const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habId);

                if (!allowed) {
                    throw new GraphQLError("You are not allowed to access this habit.");
                }
            }

            return dataSources.achievementsAPI.updateAchievement(id, achievement);
        },

        updateStreak: async (_, { id, retainStreak }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "updateStreak");
            return dataSources.achievementsAPI.updateAchievementStreak(id, retainStreak);
        },

        notifyStreakUpdate: async (_, { hab_id, freq_type, streak }, { dataSources, permissions, role }) => {
            validatePermissions(permissions, role, "notifyStreakUpdate");
            return dataSources.achievementsAPI.notifyStreakUpdate(hab_id, freq_type, streak);
        }

    }
};

module.exports = resolvers;
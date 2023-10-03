const { GraphQLError } = require('graphql');
const checkHabitOwnership = require('../../utils/checkHabitOwnership');

const resolvers = {
    Query: {
        achievementsByHabit: async (_, { id, page, per_page }, { dataSources, userId, isAdmin }) => {

            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, id);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.achievementsAPI.getHabitAchievements(id, page, per_page);
        }
    },

    Mutation: {
        addAchievement: async (_, { achievement }, { dataSources, userId, isAdmin }) => {
            // Check first if user is allowed to access this habit
            const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habId);

            if (!allowed) {
                throw new GraphQLError("You are not allowed to access this habit.");
            }
            return dataSources.achievementsAPI.addAchievement(achievement);
        },

        deleteAchievement: async (_, { id }, { dataSources }) => {
            return dataSources.achievementsAPI.deleteAchievement(id);
        },

        updateAchievement: async (_, { achievement }, { dataSources, userId, isAdmin }) => {
            if (achievement.habId) {
                // Check first if user is allowed to access this habit
                const allowed = await checkHabitOwnership(dataSources.habitsAPI, userId, isAdmin, achievement.habId);

                if (!allowed) {
                    throw new GraphQLError("You are not allowed to access this habit.");
                }
            }

            return dataSources.achievementsAPI.updateAchievement(id, achievement);
        },

        updateStreak: async (_, { id, retainStreak }, { dataSources }) => {
            return dataSources.achievementsAPI.updateAchievementStreak(id, retainStreak);
        },

        notifyStreakUpdate: async (_, { hab_id, freq_type, streak }, { dataSources }) => {
            return dataSources.achievementsAPI.notifyStreakUpdate(hab_id, freq_type, streak);
        }

    }
};

module.exports = resolvers;
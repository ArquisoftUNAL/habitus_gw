const resolvers = {
    Query: {
        achievementsByHabit: async (_, { id }, { dataSources }) => {
            return dataSources.achievementsAPI.getHabitAchievements(id);
        }
    },

    Mutation: {
        addAchievement: async (_, { achievement }, { dataSources }) => {
            return dataSources.achievementsAPI.addAchievement(achievement);
        },

        deleteAchievement: async (_, { id }, { dataSources }) => {
            return dataSources.achievementsAPI.deleteAchievement(id);
        },

        updateAchievement: async (_, { id, achievement }, { dataSources }) => {
            return dataSources.achievementsAPI.updateAchievement(id, achievement);
        },

        updateStreak: async (_, { id, retainStreak }, { dataSources }) => {
            return dataSources.achievementsAPI.updateAchievementStreak(id, retainStreak);
        },
    }
};

module.exports = resolvers;
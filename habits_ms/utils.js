const generateRequestHeaders = (userId, isAdmin) => {
    if (!userId && !isAdmin) {
        return {}
    }

    return {
        "user_id": isAdmin ? "administrator" : userId
    }
}

const notifyHabitUpdate = async (dataSources, habitDataResult,) => {
    // Lets notify achievements about last changes

    // First, get from statistics the last streak
    let statisticsStreakData = await dataSources.statisticsAPI.getMeasureStreaks(
        habitDataResult.data.hab_id
    ).data;

    if (!statisticsStreakData)
        return false;

    const keys = Object.keys(statisticsStreakData);
    const values = Object.values(statisticsStreakData);

    if (keys.length === 0 || values.length === 0)
        return false;

    // Second, get habit's frequency type and streak
    const habitData = await dataSources.habitsAPI.getHabitById("", true, habitDataResult.data.hab_id);

    if (!habitData) return false;

    // Third, notify achievements about last streak update
    // But first transform data a little bit
    const targetKey = keys[keys.length - 1];
    const targetValue = values[values.length - 1];

    const datePair = targetKey.split(',');
    const dateStart = datePair[0];
    const dateEnd = datePair[1];

    let lastStreakData = {
        id: habitDataResult.data.hab_id,
        freq_type: habitData.hab_freq_type,
        streak: {
            date_start: dateStart,
            date_end: dateEnd,
            data: targetValue
        }
    };

    await dataSources.achievementsAPI.notifyStreakUpdate(
        lastStreakData.id,
        lastStreakData.freq_type,
        lastStreakData.streak
    );

    return true;
}

module.exports = {
    generateRequestHeaders,
    notifyHabitUpdate
}
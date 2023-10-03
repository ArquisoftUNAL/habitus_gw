const checkHabitOwnership = async (habitsAPI, userId, isAdmin, habId) => {
    // Check if an habit is accessible by the user ( No need to do this on habits ms )
    try {
        const verification = await habitsAPI.checkHabitOwnership(userId, isAdmin, habId);

        if (!verification) {
            return false;
        }
    }
    catch (err) {
        console.log(err);
        return false;
    }

    return true;
}

module.exports = checkHabitOwnership;
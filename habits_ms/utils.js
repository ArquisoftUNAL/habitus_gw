const generateRequestHeaders = (userId, isAdmin) => {
    if (!userId && !isAdmin) {
        return {}
    }

    return {
        "credentials": isAdmin ? "administrator" : userId
    }
}

module.exports = {
    generateRequestHeaders
}
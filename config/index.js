const dotenv = require('dotenv');
dotenv.config();

const CONFIGURATION = {
    HABITS_MS_URL: process.env.HABITS_MS_URL,
    USERS_MS_URL: process.env.USERS_MS_URL,
    STATISTICS_MS_URL: process.env.STATISTICS_MS_URL,
    ACHIEVEMENTS_MS_URL: process.env.ACHIEVEMENTS_MS_URL,
    NOTIFICATIONS_MS_URL: process.env.NOTIFICATIONS_MS_URL,

    QUEUE_URL: process.env.QUEUE_URL,

    HABITS_UPDATE_QUEUE: process.env.HABITS_UPDATE_QUEUE,
    NOTIFICATIONS_QUEUE: process.env.NOTIFICATIONS_QUEUE,

    PORT: process.env.PORT || 4000
};

module.exports = CONFIGURATION;
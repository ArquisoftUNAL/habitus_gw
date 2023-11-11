const dotenv = require('dotenv');
const NodeCache = require('node-cache');
dotenv.config();

const CONFIGURATION = {
    HABITS_MS_URL: process.env.HABITS_MS_URL,
    USERS_MS_URL: process.env.USERS_MS_URL,
    STATISTICS_MS_URL: process.env.STATISTICS_MS_URL,
    ACHIEVEMENTS_MS_URL: process.env.ACHIEVEMENTS_MS_URL,
    NOTIFICATIONS_MS_URL: process.env.NOTIFICATIONS_MS_URL,

    QUEUE_URL: process.env.QUEUE_URL,
    QUEUE_PROTOCOL: process.env.QUEUE_PROTOCOL,
    QUEUE_VHOST: process.env.QUEUE_VHOST,
    QUEUE_PORT: process.env.QUEUE_PORT,

    HABITS_UPDATE_QUEUE_USERNAME: process.env.HABITS_UPDATE_QUEUE_USERNAME,
    HABITS_UPDATE_QUEUE_PASSWORD: process.env.HABITS_UPDATE_QUEUE_PASSWORD,
    HABITS_UPDATE_QUEUE: process.env.HABITS_UPDATE_QUEUE,
    HABITS_UPDATE_EXCHANGE: process.env.HABITS_UPDATE_EXCHANGE,

    NOTIFICATIONS_QUEUE_USERNAME: process.env.NOTIFICATIONS_QUEUE_USERNAME,
    NOTIFICATIONS_QUEUE_PASSWORD: process.env.NOTIFICATIONS_QUEUE_PASSWORD,
    NOTIFICATIONS_QUEUE: process.env.NOTIFICATIONS_QUEUE,
    NOTIFICATIONS_EXCHANGE: process.env.NOTIFICATIONS_EXCHANGE,

    EXTERNAL_INTERFACE_URL: process.env.EXTERNAL_INTERFACE_URL,

    PORT: process.env.PORT || 4000,

    cache: new NodeCache({
        stdTTL: 60 * 20, // 20 minutes
    }),
};

module.exports = CONFIGURATION;
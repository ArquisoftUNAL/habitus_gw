const habitsMsTypesDefs = require('./../habits_ms/typeDefs');
const usersMsTypesDefs = require('./../users_ms/typeDefs');
const statisticsMsTypesDefs = require('./../statistics_ms/typeDefs');
const notificationsMsTypesDefs = require('./../notifications_ms/typeDefs');
const achievementsMsTypesDefs = require('./../achievements_ms/typeDefs');
const externalInterfaceTypesDefs = require('./../external_interface/typeDefs');

const root = `#graphql

    scalar JSONObject
    
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const typeDefs = [
    root, habitsMsTypesDefs, usersMsTypesDefs,
    statisticsMsTypesDefs, notificationsMsTypesDefs, achievementsMsTypesDefs, externalInterfaceTypesDefs];

module.exports = typeDefs;
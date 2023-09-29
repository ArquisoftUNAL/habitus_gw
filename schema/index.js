const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Append inputs, typeDefs, and resolvers to the schema
const schema = {
    typeDefs,
    resolvers
};

module.exports = schema;
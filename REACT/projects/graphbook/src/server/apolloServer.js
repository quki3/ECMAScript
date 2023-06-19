var { ApolloServer } = require('@apollo/server');
var { startStandaloneServer } = require('@apollo/server/standalone');
var typeDefs = require('./services/graphql/schema.js');
var resolvers = require('./services/graphql/resolvers.js');
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = async ()=> await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);

module.exports = server;

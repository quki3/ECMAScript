var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var source = '{ hello }';

graphql({ schema, source, root }).then((response) => {
  console.log(response);
});

module.exports = { schema, root, source };

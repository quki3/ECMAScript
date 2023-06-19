import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compress from 'compression';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import Resolvers from './services/graphql/resolvers';
import Schema from './services/graphql/schema';
import services from './services';


/*resolving the data we are going to white*/
const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

/*we can access the request if we need to*/
const server = new ApolloServer({
  schema: executableSchema,
  context: ({req }) => req
});


const app = express();
const root = path.join(__dirname,'../../');

/*helmet allow to set various HTTP headers to secure your app*/
app.use(helmet());

/*this header prevents attackers from loading resources from external URLs*/
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'","'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "*.amazonaws.com"]
  }
}));

/*this enhancement stops any internal routing or requests being exposed to the internet*/
app.use(helmet.referrerPolicy({ policy: 'same-origin'}));

/**/
app.use(compress());
/**/
app.use(cors());

app.use('/', express.static(path.join(root,'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.use('/graphql', graphlHTTP({
                                  schema:schema,
                                  rootValue:root,
                                  graphiql:true,
}));
app.get('/', (req,res) => {
  res.sendFile(path.join(root, '/dist/client/index.html'));
});

app.listen(8000,() => console.log('listening on port 8000!'));


export default server;

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './graphql';
import './config';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

const express = require("express");
const app = express();
const port = 4000;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, () => console.log(`Server listening on port ${port}!`));

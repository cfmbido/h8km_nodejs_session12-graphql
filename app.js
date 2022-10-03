const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");
const root = require("./root");

// Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//     hacktiv8: String
//   }
// `);

// The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return "Hello world!";
//   },
//   hacktiv8: () => {
//     return "Hacktiv8";
//   },
// };

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");

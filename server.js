const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = 3000;

const sequelize = require("./db/connection");
const schema = require("./graphQl/schema");

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP(async (req) => ({
    schema,
    graphiql: true,
  }))
);

app.listen(PORT, async () => {
  try {
    // Sync models with database
    await sequelize.sync({ force: false });
    console.log("<< Database synced successfully >>");

    // Start GraphQL server
    console.log(`<<< App is listening at http://localhost:${PORT} >>>`);
  } catch (error) {
    console.error("Error syncing database:", error);
  }
});

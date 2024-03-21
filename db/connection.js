const Sequelize = require("sequelize");

const sequelize = new Sequelize("social-media", "root", "722446", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("< DB Connected >");
  })
  .catch((err) => {
    console.log("error" + err);
  });

module.exports = sequelize;

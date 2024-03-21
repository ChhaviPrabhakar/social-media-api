const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  name: Sequelize.STRING,

  email: {
    type: Sequelize.STRING,
    unique: true,
  },

  mobile: Sequelize.BIGINT,

  password: Sequelize.STRING,
});

module.exports = User;

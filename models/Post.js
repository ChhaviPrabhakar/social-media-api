const Sequelize = require("sequelize");
const sequelize = require("../db/connection");

const Post = sequelize.define("Post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  title: Sequelize.STRING,

  content: Sequelize.TEXT,
  userId: Sequelize.INTEGER,
});

module.exports = Post;

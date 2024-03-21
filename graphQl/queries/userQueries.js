const User = require("../../models/User");
const { GraphQLList, GraphQLInt } = require("graphql");
const UserType = require("../typeDefs/userTypeDefs");

module.exports.GET_ALL_USER = {
  type: new GraphQLList(UserType),
  resolve: async (parent, args, context) => {
    try {
      let data = await User.findAll();
      return data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw new Error("Failed to fetch all users");
    }
  },
};

module.exports.USER_BY_ID = {
  type: UserType,
  args: { id: { type: GraphQLInt } },
  resolve: async (parent, args) => {
    try {
      let data = await User.findOne({ where: { id: args.id } });
      return data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw new Error("Failed to fetch user by ID");
    }
  },
};

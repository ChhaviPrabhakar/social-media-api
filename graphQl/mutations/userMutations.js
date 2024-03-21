const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const UserType = require("../typeDefs/userTypeDefs");
const StatusType = require("../typeDefs/statusTypeDefs");

module.exports.ADD_USER = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    mobile: { type: GraphQLString },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent, args) => {
    try {
      const hashedPassword = await bcrypt.hash(args.password, 10);
      const newUser = await User.create({
        name: args.name,
        email: args.email,
        mobile: args.mobile,
        password: hashedPassword,
      });
      return newUser;
    } catch (error) {
      console.error("Error adding user:", error);
      throw new Error("Failed to add user");
    }
  },
};

module.exports.UPDATE_USER = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    mobile: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (parent, args) => {
    await User.update(
      {
        name: args.name,
        email: args.email,
        mobile: args.mobile,
        password: args.password,
      },
      { where: { id: args.id } }
    );
    return { success: true, message: "Successfully Updated" };
  },
};

module.exports.DELETE_USER = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    await User.destroy({ where: { id: args.id } });
    return { success: true, message: "Successfully Deleted" };
  },
};

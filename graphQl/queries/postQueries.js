const Post = require("../../models/Post");
const { GraphQLList, GraphQLInt } = require("graphql");
const PostType = require("../typeDefs/postTypeDefs");

module.exports.GET_ALL_POST = {
  type: new GraphQLList(PostType),
  resolve: async (parent, args, context) => {
    try {
      // let myData = await context();
      // console.log(myData.host);
      let data = await Post.findAll();
      return data;
    } catch (error) {
      console.error("Error fetching all users:", error);
      throw new Error("Failed to fetch all users");
    }
  },
};

module.exports.POST_BY_USERID = {
  type: new GraphQLList(PostType),
  args: { userId: { type: GraphQLInt } },
  resolve: async (parent, args) => {
    try {
      let data = await Post.findAll({ where: { userId: args.userId } });
      return data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw new Error("Failed to fetch user by ID");
    }
  },
};

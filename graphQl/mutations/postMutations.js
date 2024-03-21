const { GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const PostType = require("../typeDefs/postTypeDefs");
const Post = require("../../models/Post");
const StatusType = require("../typeDefs/statusTypeDefs");

module.exports.ADD_POST = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    content: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: async (parent, args) => {
    try {
      const newPost = await Post.create({
        title: args.title,
        content: args.content,
        userId: args.userId,
      });
      return newPost;
    } catch (error) {
      console.error("Error adding post:", error);
      throw new Error("Failed to add post");
    }
  },
};

module.exports.DELETE_POST = {
  type: StatusType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (parent, args) => {
    try {
      await Post.destroy({ where: { id: args.id } });
      return { success: true, message: "Successfully Deleted" };
    } catch (error) {
      console.error("Error deleting post:", error);
      throw new Error("Failed to delete post");
    }
  },
};

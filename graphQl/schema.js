const { GraphQLObjectType, GraphQLSchema } = require("graphql");

const { GET_ALL_USER, USER_BY_ID } = require("./queries/userQueries");
const { GET_ALL_POST, POST_BY_USERID } = require("./queries/postQueries");

const {
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} = require("./mutations/userMutations");

const { ADD_POST, DELETE_POST } = require("./mutations/postMutations");

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAllUser: GET_ALL_USER,
    getUserById: USER_BY_ID,
    getAllPost: GET_ALL_POST,
    getPostByUserId: POST_BY_USERID,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    registerNewUser: ADD_USER,
    updateUser: UPDATE_USER,
    deleteUser: DELETE_USER,
    addPost: ADD_POST,
    deletePost: DELETE_POST,
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

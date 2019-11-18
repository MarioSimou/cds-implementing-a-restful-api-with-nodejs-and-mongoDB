import { GraphQLString, GraphQLObjectType, GraphQLID } from "graphql";
import { Role } from "./enums";
import { Node, Timestamp } from "./interfaces";

export default new GraphQLObjectType({
  name: "User",
  interfaces: [Node, Timestamp],
  fields: {
    id: {
      type: GraphQLID
    },
    username: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    role: {
      type: Role
    },
    createdAt: {
      type: GraphQLString
    },
    updatedAt: {
      type: GraphQLString
    }
  }
});

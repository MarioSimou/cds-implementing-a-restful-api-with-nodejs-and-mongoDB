import {
  GraphQLID,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull
} from "graphql";

export const queryUserInput = new GraphQLInputObjectType({
  name: "queryUserInput",
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString }
  }
});

export const createUserDataInput = new GraphQLInputObjectType({
  name: "createUserDataInput",
  fields: {
    username: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    password: { type: GraphQLNonNull(GraphQLString) },
    role: { type: GraphQLString, defaultValue: "BASIC" }
  }
});

export const updateUserDataInput = new GraphQLInputObjectType({
  name: "updateUserDataInput",
  fields: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString }
  }
});

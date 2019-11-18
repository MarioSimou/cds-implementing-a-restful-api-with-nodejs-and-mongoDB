import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { Response } from "./union";
import mutation from "../../resolvers/Mutation";
import {
  createUserDataInput,
  queryUserInput,
  updateUserDataInput
} from "./input";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: GraphQLNonNull(Response),
      resolve: mutation.createUser,
      args: {
        data: { type: GraphQLNonNull(createUserDataInput) }
      }
    },
    updateUser: {
      type: GraphQLNonNull(Response),
      resolve: mutation.updateUser,
      args: {
        query: { type: GraphQLNonNull(queryUserInput) },
        data: { type: GraphQLNonNull(updateUserDataInput) }
      }
    },
    deleteUser: {
      type: GraphQLNonNull(Response),
      resolve: mutation.deleteUser,
      args: {
        query: { type: GraphQLNonNull(queryUserInput) }
      }
    }
  }
});

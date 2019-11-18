import { GraphQLObjectType, GraphQLNonNull } from "graphql";
import { getUser, getUsers } from "../../resolvers/Query";
import { Response } from "./union";
import { queryUserInput } from "./input";
import transformVariables from '../../utils/middlewares/transformVariables'

export default new GraphQLObjectType({
  name: "Query",
  fields: {
    getUsers: {
      type: GraphQLNonNull(Response),
      resolve: getUsers
    },
    getUser: {
      type: GraphQLNonNull(Response),
      resolve: transformVariables(getUser),
      args: {
        query: { type: GraphQLNonNull(queryUserInput) }
      }
    }
  }
});

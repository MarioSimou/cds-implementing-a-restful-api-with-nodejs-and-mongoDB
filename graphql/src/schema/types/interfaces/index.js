import {
  GraphQLInterfaceType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean
} from "graphql";

export const Node = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: GraphQLID }
  }
});
export const Timestamp = new GraphQLInterfaceType({
  name: "Timestamp",
  fields: {
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  }
});

export const Responsable = new GraphQLInterfaceType({
  name: "Responsable",
  fields: {
    status: { type: GraphQLInt },
    success: { type: GraphQLBoolean },
    message: { type: GraphQLString }
  }
});

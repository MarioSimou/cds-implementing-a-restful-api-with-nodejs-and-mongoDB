import { GraphQLUnionType } from "graphql";
import * as r from "../Response";
import * as cr from "../../../models/utils/Response";

// resolveType has been added to split the object types
export const Response = new GraphQLUnionType({
  name: "Response",
  types: [r.ResponseUser, r.ResponseUsers],
  resolveType(value) {
    if (value instanceof cr.ResponseUser) return r.ResponseUser;
    else if (value instanceof cr.ResponseUsers) return r.ResponseUsers;
  }
});

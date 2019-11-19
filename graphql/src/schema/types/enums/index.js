import { GraphQLEnumType } from "graphql";

export const Role = new GraphQLEnumType({
  name: "Role",
  values: {
    BASIC: { value: "BASIC" },
    ADMIN: { value: "ADMIN" }
  }
});

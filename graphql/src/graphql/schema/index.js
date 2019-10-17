import gql from 'gql-tag'

export default gql`

type Query {
  users: UsersResponse!
  user(where: SearchUserInput!): UserResponse!
}

type Mutation {
  createUser(data: CreateUserDataInput!): UserResponse!
  updateUser(where: SearchUserInput!, data: UpdateUserDataInput!): UserResponse!
  deleteUser(where: SearchUserInput!): UserResponse!
}

type UsersResponse implements Response {
  status: Int!
  success: Boolean!
  message: String!
  users: [User]
}

type UserResponse implements Response {
  status: Int!
  success: Boolean!
  message: String!
  user: User
}

type User implements Node & Timestamp {
  id: ID!
  username: String!
  email: String!
  password: String!
  role: Role
  createdAt: String!
  updatedAt: String!
}

interface Response {
  status: Int!
  success: Boolean!
  message: String!
}

interface Node {
  id: ID!
}

interface Timestamp {
  createdAt: String!
  updatedAt: String!
}

input CreateUserDataInput {
  username: String!
  email: String!
  password: String!
}
input SearchUserInput {
  id: ID
  username: String
  email: String
}

input UpdateUserDataInput {
  username: String
  email: String
  password: String
  role: Role
}

enum Role {
  BASIC
  ADMIN
}
`
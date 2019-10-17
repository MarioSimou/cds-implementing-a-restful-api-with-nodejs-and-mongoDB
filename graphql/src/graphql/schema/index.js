import gql from 'gql-tag'

export default gql`

type Query {
  users: UsersResponse!
  user: UserResponse!
}

type Mutation {
  createUser: UserResponse!
  updateUser: UserResponse!
  deleteUser: UserResponse!
}

type UsersResponse implements Response {
  status: Int!
  success: Boolean!
  message: String!
  users: [User]!
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

enum Role {
  BASIC
  ADMIN
}
`
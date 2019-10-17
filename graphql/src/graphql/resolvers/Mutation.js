import userResolvers from './user'

export const Mutation = {
  createUser: userResolvers.createUser,
  updateUser: userResolvers.updateUser,
  deleteUser: userResolvers.deleteUser,
}
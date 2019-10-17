import userResolvers from './user'

export const Query = {
  users: userResolvers.users,
  user: userResolvers.user,
}
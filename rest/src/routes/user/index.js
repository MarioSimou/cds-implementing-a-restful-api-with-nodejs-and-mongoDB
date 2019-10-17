import users from './users'
import user from './user'
import createUser from './createUser'
import updateUser from './updateUser'
import deleteUser from './deleteUser'
import notFound from './notFound'

export default {
  findAll: users,
  findOne: user,
  create: createUser,
  delete: deleteUser,
  update: updateUser,
  notFound: notFound,
}

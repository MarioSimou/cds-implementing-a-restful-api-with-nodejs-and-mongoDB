import users from './users'
import user from './user'
import createUser from './createUser'
import deleteUser from './deleteUser'
import updateUser from './updateUser'

export default {
  findAll : users,
  findOne : user,
  create : createUser,
  delete : deleteUser,
  update : updateUser
}
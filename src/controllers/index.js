import expressPromiseRouter from 'express-promise-router'
import users from './users/users'
import userByUsername from './users/userByUsername'
import userById from './users/userByUsername'
import createUser from './users/createUser'
import deleteUserByUsername from './users/deleteUserByUsername'
import updateUserByUsername from './users/updateUserByUsername'

const router = expressPromiseRouter()

router.get('/users', users )
router.get('/users/:username', userByUsername)
router.get('/users/:id', userById )
router.post('/users', createUser)
router.delete('/users/:username', deleteUserByUsername )
router.put('/users/:username', updateUserByUsername )

export default router
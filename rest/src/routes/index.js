import expressPromiseRouter from 'express-promise-router'
import user from './user'
 
const router = expressPromiseRouter()
 
// /api/users
router.get('/users', user.findAll )
router.get('/users/:id', user.findOne )
router.post('/users', user.create )
router.delete('/users/:id', user.delete )
router.put('/users/:id', user.update )
router.all('*', user.notFound)

export default router
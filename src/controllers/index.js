import expressPromiseRouter from 'express-promise-router'
import user from './user'
import book from './book'

const router = expressPromiseRouter()

// /api/users
router.get('/users', user.findAll )
router.get('/users/:id', user.findOne )
router.post('/users', user.create )
router.delete('/users/:id', user.delete )
router.put('/users/:id', user.update )

// api/books
router.get('/books', book.findAll )
router.get('/books/:id', book.findOne)
router.post('/books', book.create )
router.put('/books/:id', book.update )
router.delete('/books/:id', book.delete )

export default router
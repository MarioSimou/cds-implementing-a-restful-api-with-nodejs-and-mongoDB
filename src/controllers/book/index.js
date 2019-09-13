import books from './books'
import book from './books'
import createBook from './createBook'
import deleteBook from './deleteBook'
import updateBook from './updateBook'

export default {
  findAll: books,
  findOne: book,
  create: createBook,
  update: updateBook,
  delete: deleteBook,
}
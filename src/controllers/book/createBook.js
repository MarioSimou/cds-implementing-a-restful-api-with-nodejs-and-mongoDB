import Book from '../../models/Book'

export default async (req, res, next ) => {
  try {
    const { title, abstract, genre, author_id } = req.body
    const book = new Book({ title, abstract, genre, author_id })
    await book.save()

    res.status(200).json({ status: 200, data: book })
  } catch( e ){
    return next( e )
  }
}
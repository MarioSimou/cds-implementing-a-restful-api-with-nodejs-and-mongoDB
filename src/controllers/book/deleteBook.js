import Book from '../../models/Book'

export default async (req, res, next ) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id)
    res.status(200).json({ status: 200, data: book })
  } catch( e ){
    return next( e )
  }
}
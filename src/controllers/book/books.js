import Book from '../../models/Book'

export default async (req, res, next ) => {
  try {
    res.status(200).json({ status: 200, data: await Book.find().populate('author_id') })
  } catch( e ){
    return next( e )
  }
}
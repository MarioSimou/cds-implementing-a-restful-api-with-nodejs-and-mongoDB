import Book from '../../models/Book'

export default async (req, res, next ) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id).populate('author_id')
    
    res.status(200).json({ status: 200, data: book })
  } catch( e ){
    return next( e )
  }
}
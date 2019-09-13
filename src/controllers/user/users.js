import User from '../../models/User'

export default async (req, res, next) => {
  try {
    res.status(200).json({ status: 200, data: await User.find().populate('book_id') })  
  } catch( e ){
    return next(e)
  }
}
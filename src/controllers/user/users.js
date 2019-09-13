import User from '../../models/User'

export default async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json({ status: 200, data: users })  
  } catch( e ){
    return next(e)
  }
}
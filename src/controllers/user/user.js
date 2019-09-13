import User from '../../models/User'

export default async (req, res, next) => {
  try {
    const user = await User.findById(id)
    res.status(200).json({ status: 200, data: user })  
  } catch( e ){
    return next(e)
  }
}
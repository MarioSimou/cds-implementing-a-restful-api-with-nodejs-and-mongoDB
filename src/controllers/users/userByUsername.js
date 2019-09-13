import User from '../../models/User'

export default async (req, res, next) => {
  try {
    const { username } = req.params
    const user = await User.findOne({username})

    res.set({'Content-Type': 'application/json'})
    res.status(200).json({ status: 200, data: user })  
  } catch( e ){
    return next(e)
  }
}
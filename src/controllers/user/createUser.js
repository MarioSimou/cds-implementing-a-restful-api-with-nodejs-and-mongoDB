import User from '../../models/User'

export default async (req,res,next) => {
  try {
    const { username, email } = req.body
    const user = new User({email,username})
    await user.save()
  
    res.status(200).json({status: 200, data: user })
  } catch( e ){
    return next( e )
  }
}
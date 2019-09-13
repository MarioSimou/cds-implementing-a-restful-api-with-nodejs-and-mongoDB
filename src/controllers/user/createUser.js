import User from '../../models/User'

export default async (req,res,next) => {
  try {
    const { username, email, book_id } = req.body
    const user = new User({email,username, book_id })
    await user.save()
  
    res.status(200).json({status: 200, data: user })
  } catch( e ){
    return next( e )
  }
}
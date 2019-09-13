import User from '../../models/User'

export default async (req,res,next) => {
  try {
    // {new: true} -> returns the latest updated record
    const user = await User.findOneAndUpdate(req.params.id , { "$set" : req.body }, {new: true })
    
    res.status(200).json({status: 200, data: user })
  } catch( e ){
    return next( e )
  }
}
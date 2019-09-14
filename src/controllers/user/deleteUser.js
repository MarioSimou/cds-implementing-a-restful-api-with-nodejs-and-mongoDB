import User from '../../models/User'

export default async (req,res,next) => {
  try {
    await User.findByIdAndRemove(req.params.id)

    // an HTTP status code of 204 is returned, indicating that the request was successful, however, no body is returned 
    res.status(204).end()
  } catch( e ){
    return next( e )
  }
}
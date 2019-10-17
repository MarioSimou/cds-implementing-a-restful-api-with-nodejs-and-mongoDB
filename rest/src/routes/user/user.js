import User from '../../models/User'
import NotFound from '../../utils/Errors/NotFound'
export default async (req, res, next) => {
  try {
    const {id} = req.params
    // HTTP/1.1 400 Bad Request
    if(!id) throw new BadRequest("Unable to extract user id")
 
    const user = await User.findById(id)    
    // HTTP/1.1 404 Not Found
    if(!user) throw new NotFound("User not found")
 
    /* 
      the state of the resource is delivered by setting a response code
      and response body(hypertext as the engine of application state)
    */
    res.json({status: 200, data: user})  
  } catch( e ){
    return next(e)
  }
}
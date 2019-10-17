import User from '../../models/User'
 
export default async (req, res, next) => {
  try {
    /* 
      the state of the resource is delivered by setting a response code
      and response body(hypertext as the engine of application state)
    */
    res.json({status: 200, success:true, data: await User.find()})  
  } catch( e ){
    return next(e)
  }
}
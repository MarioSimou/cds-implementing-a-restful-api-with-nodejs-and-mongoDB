import User from '../../models/User'
 
export default async (req,res,next) => {
  try {
    /*
    for demonstration purposes, we don't validate the request body, neither check 
    if a user is authorized to perform that request.
    However we could easily proceed validating the data, returning the appropriate
    codes if its invalid
    e.g HTTP 422 Unprocessed Entity if the password is less than 8 character
        HTTP 409 Conflict if the email already exists
        HTTP 422 Unprocessed Entity if the email is invalid
    or check the user credentials returning the appropriate codes
        HTTP 401 Unauthorized if the user does not pass a jwt token in Authorization header
        HTTP 403 Forbidden if a user A attempts to update the profile of user B
    */
 
    // HTTP/1.1 400 Bad Request
    if(!Object.values(req.body).length) throw new BadRequest('Unable to parse request body. No data has been passed to it.')
 
    const user = await User.create(req.body)
    
    // HTTP Header Location: /api/users/:id
    /*
      this allows to reference the URI of the newly created user in the 
      request response (manipulation of resources through representations)  
    */
    res.location([ req.originalUrl, user._id ].join('/') )
 
    /* 
      the state of the resource is delivered by setting a response code
      and response body(hypertext as the engine of application state)
    */
    res.json({status: 201, success:true, data: user})
  } catch( e ){
    return next( e )
  }
}
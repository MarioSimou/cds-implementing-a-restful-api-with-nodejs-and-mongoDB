import User from '../../models/User'
import Errors from '../../utils/Errors'
import path from 'path'


export default async (req,res,next) => {
  let user
  try {
    user = await User.create(req.body)
    
    // set location header
    res.location([ req.originalUrl, user._id ].join('/') )
    // an HTTP status code of 201 is returned, which indicates that a new resources have been created
    res.status(201).json({status: 201, data: user })
  } catch( e ){
    return next( e )
  }
}
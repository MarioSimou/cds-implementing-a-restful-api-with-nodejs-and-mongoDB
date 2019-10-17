import BadRequest from './Errors/BadRequest'

export const checkHeaders = (req,res,next) => {
    // invalid POST Or PUT request
    if(req.method === 'POST' || req.method == 'PUT'){
      try {
        const accept = req.header('Accept')
        const contentType = req.header('Content-Type')
        
        if(contentType !== 'application/json')
          throw new BadRequest('Content-Type header has to explicitly set to application/json')
        if(!['application/json','*/*'].includes(accept))
          throw new BadRequest('Accept header has to either set */* or application/json')
      }catch( e ){
        return next(e)
      }  
    }
    
    // valid request
    next()
}
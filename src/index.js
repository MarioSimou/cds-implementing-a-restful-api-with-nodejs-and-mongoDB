import express from 'express'
import controllers from './controllers'
import mongoConnection from './utils/mongoConnection'
import errorHandling from './utils/errorHandling'
import BadRequest from './utils/Errors/BadRequest'

const app = express(),
      port = process.env.PORT || 3000;

// includes a parser for json data
app.use(express.json())

// middleware that checks if the incoming requests have set the appropriate headers
app.use((req,res,next)=> {
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
})

// ROUTES - Route Prefix: /api
app.use('/api',  controllers )
app.use( errorHandling )


mongoConnection.init({ uri: process.env.MONGO_URI}, db => {
  app.listen(port , () => process.stdout.write(`The app listens on port http://localhost:${port}\n`))
})
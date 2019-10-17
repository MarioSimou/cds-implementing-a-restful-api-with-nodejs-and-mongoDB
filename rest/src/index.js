import express from 'express'
import routes from './routes'
import mongoConnection from './utils/mongoConnection'
import errorHandling from './utils/errorHandling'
import * as middlewares from './utils/middlewares'

const app = express(),
      port = process.env.PORT || 3000;

// includes a parser for json data
app.use(express.json())

// middleware that checks if the incoming requests have set the appropriate headers
app.use(middlewares.checkHeaders)

// routing
app.use('/api', routes)
app.use( errorHandling )


mongoConnection.init({ uri: process.env.MONGO_URI}, db => {
  app.listen(port , () => process.stdout.write(`The app listens on port http://localhost:${port}\n`))
})
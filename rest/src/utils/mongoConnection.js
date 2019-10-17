import mongoose  from 'mongoose'

let db
const EVENTS = (function(){
  const e = {
    CONNECT: 'connected',
    DISCONNECT: 'disconnected',
    ERROR: 'error',
  }
  Object.freeze( e )
  return e    
})()

export default {
  init: ({ uri }, cb ) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false })

    // listening events
    mongoose.connection.on(EVENTS.CONNECT, ()=> { db = mongoose.Connection; cb(db) } )
    mongoose.connection.on(EVENTS.DISCONNECT, () => process.stdout.write('succesfully disconnected'))
    mongoose.connection.on(EVENTS.ERROR, e => process.stdout.write(`${e}\n`))
  },
  db : () => db 
}
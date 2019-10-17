function Base(message){

  Error.call(this, message)
  this._message = message
  this._name = null
  this._status = null

  Object.defineProperties(this, {
    message: {
      get(){
        return this._message
      }
    },
    name: {
      get(){
        return this._name
      }
    },
    status: {
      get (){
        return this._status || 400
      }
    }
  })
}

Base.prototype = Error.prototype
Base.prototype.constructor = Base

export default Base
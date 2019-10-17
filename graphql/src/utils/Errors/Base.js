function Base(msg){
  if((!this instanceof Base)){
    return new Base(msg)
  }

  Error.call(this, msg)
  this._name = null
  this._status = null
  this._message = msg

  Object.defineProperties(this, {
    name: {
      get: function(){ return this._name }
    },
    status: {
      get: function(){ return this._status }
    },
    message: {
      get: function(){ return this._message }
    }
  })
}

Base.prototype = Error.prototype
Base.prototype.constructor = Base

export default Base
import Base from './Base'

function InternalServerError(message){
  Base.call(this, message )
  this._status = 500
  this._name= 'Internal Server Error'
}

InternalServerError.prototype = Base.prototype
InternalServerError.prototype.constructor = InternalServerError

export default InternalServerError
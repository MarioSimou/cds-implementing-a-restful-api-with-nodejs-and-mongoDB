import Base from './Base'

function InternalServerError(message){
  this._status = 500
  Base.call(this, message )
}

InternalServerError.prototype = Base.prototype
InternalServerError.prototype.constructor = InternalServerError

export default InternalServerError
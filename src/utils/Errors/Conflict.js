import Base from './Base'

function Conflict(message){
  this._status = 409
  Base.call(this, message )
}

Conflict.prototype = Base.prototype
Conflict.prototype.constructor = Conflict

export default Conflict
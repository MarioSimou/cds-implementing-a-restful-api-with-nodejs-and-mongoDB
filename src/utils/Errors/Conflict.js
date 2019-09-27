import Base from './Base'

function Conflict(message){
  Base.call(this, message )
  this._status = 409
  this._name= 'Conflict'
}

Conflict.prototype = Base.prototype
Conflict.prototype.constructor = Conflict

export default Conflict
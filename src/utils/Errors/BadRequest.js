import Base from './Base'

function BadRequest(message){
  this._status = 400
  Base.call( this , message )
}

BadRequest.prototype = Base.prototype
BadRequest.prototype.constructor = BadRequest

export default BadRequest
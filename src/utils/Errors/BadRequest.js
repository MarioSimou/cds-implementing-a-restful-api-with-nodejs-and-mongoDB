import Base from './Base'

function BadRequest(message){
  Base.call( this , message )
  this._status = 400
  this._name= 'Bad Request'
}

BadRequest.prototype = Base.prototype
BadRequest.prototype.constructor = BadRequest

export default BadRequest
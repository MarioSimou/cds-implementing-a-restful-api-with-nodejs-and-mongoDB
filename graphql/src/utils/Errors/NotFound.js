import Base from './Base'

function NotFound(msg){
  if(!(this instanceof NotFound)){
    return new NotFound(msg)
  }
  Base.call(this, msg)
  this._name = 'Not Found'
  this._status = 404
}

NotFound.prototype = Base.prototype
NotFound.prototype.constructor = NotFound

export default NotFound

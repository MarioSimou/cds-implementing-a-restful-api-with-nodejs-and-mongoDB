import Base from './Base'

function NotFound( message ){
    Base.call( this , message )
    this._status = 404
}

NotFound.prototype = Base.prototype
NotFound.prototype.constructor = NotFound

export default NotFound
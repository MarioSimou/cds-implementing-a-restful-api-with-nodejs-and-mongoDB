class Base {
    constructor(message){
        this.message = message
    }
}

export class NotFound extends Base {
    constructor(e){
        super(e)
        this.status = 404
        this.name = 'Not Found'
    }
}

export class BadRequest extends Base {
    constructor(e){
        super(e)
        this.status = 400
        this.name = 'Bad Request'
    }
}
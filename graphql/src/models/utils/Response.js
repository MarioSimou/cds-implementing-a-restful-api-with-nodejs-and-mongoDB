export class Response {
  constructor({ status, success, message }) {
    this.status = status;
    this.success = success;
    this.message = message;
  }
}

export class ResponseUser extends Response {
  constructor({ user, ...parent }) {
    super(parent);
    this.user = user;
  }
}

export class ResponseUsers extends Response {
  constructor({ users, ...parent }) {
    super(parent);
    this.users = users;
  }
}

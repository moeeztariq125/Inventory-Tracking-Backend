import { CustomError } from "./CustomError";

export class UnexpectedError extends CustomError {
  constructor(message: string) {
    super(message, 500);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, UnexpectedError.prototype);
  }
}

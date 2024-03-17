import { RequestHandler } from "express";
import validation from "../../utils/validation";
import { ValidationChain } from "express-validator";

type ValidationObject = Record<string, ValidationChain[]>;
class BaseValidatorClass<T extends ValidationObject> {
  private validations: T;
  constructor(validations: T) {
    this.validations = validations;
  }
  getValidator(getValidator: string): RequestHandler {
    const selectedValidation = this.validations[getValidator];
    return validation(selectedValidation);
  }
}

export { BaseValidatorClass };

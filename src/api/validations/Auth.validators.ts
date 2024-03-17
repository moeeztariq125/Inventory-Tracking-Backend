import { ValidationChain, body } from "express-validator";
import { BaseValidatorClass } from "./Base.validator";

class AuthValidator extends BaseValidatorClass<
  Record<string, ValidationChain[]>
> {}

const checkValidator: ValidationChain[] = [
  body("email").isEmail().withMessage("Please enter a valid Email").bail()
];

const signUpValidator: ValidationChain[] = [
  body("email").isEmail().withMessage("Please enter a valid Email").bail(),
  body("firstName")
    .isString()
    .notEmpty()
    .withMessage("Please Enter your First Name")
    .bail(),
  body("lastName")
    .isString()
    .notEmpty()
    .withMessage("Please Enter your Last Name")
    .bail(),
  body("dob").isDate().withMessage("Please Enter your Date of Birth").bail(),
  body("nickname").isString().withMessage("Please Enter a Nickname").bail(),
  body("password")
    .isStrongPassword()
    .withMessage("Please Enter a Strong Password"),
  body("confirmPassword").customSanitizer((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  })
];

export const authValidator = new AuthValidator({
  check: checkValidator,
  signup: signUpValidator
});

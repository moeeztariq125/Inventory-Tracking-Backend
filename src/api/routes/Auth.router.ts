import { Router } from "express";
import { authValidator } from "../validations/Auth.validators";
import { controllers } from "../../loaders";
import BaseRouter from "./Base.router";

const authRouter = Router();
authRouter
  .post(
    "/check",
    authValidator.getValidator("check"),
    controllers.userController.check
  )
  .post(
    "/sign-up",
    authValidator.getValidator("signup"),
    controllers.userController.signUp
  );

class AuthRouter extends BaseRouter {
  constructor(router: Router[] | Router) {
    super(router);
  }
}

export default new AuthRouter(authRouter);

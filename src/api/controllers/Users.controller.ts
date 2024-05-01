import { NextFunction, Request, Response } from "express";
import { usersServiceClass } from "../services";
import { UnexpectedError } from "../../errors/UnexpectedError";

class userControllerClass {
  private usersService: usersServiceClass;
  constructor(usersService: usersServiceClass) {
    this.usersService = usersService;
  }
  getUser = async (req: Request, res: Response) => {
    res.send("user details");
  };
  updateUser = async (req: Request, res: Response) => {
    res.send("user updated");
  };
  createUser = async (req: Request, res: Response) => {
    res.send("user Created");
  };
  deleteUser = async (req: Request, res: Response) => {
    res.send("user deleted");
  };
  check = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const exists = await this.usersService.checkUser(email);
      if (exists) {
        return res.status(200).json({
          message: "OK|SUCCESS",
          redirectTo: "SIGNIN"
        });
      }
      return res.status(200).json({
        message: "OK|SUCCESS",
        redirectTo: "SIGNUP"
      });
    } catch (err: any) {
      next(err);
    }
  };
  signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      const exists = await this.usersService.checkUser(email);
      if (exists) {
        return res.status(200).json({
          message: "OK|SUCCESS",
          redirectTo: "SIGNIN"
        });
      }
      await this.usersService.createUnverifiedUser(email);
    } catch (err: any) {
      next(err);
    }
  };
}

export default userControllerClass;

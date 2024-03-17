import { Request, Response } from "express";
import { usersServiceClass } from "../services";

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
  check = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      const exists = await this.usersService.checkUser(email);
      let response = {};
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
      console.log("ye to error hogya", err.message);
    }
  };
  signUp = async (req: Request, res: Response) => {
    res.send("sign up");
  };
}

export default userControllerClass;

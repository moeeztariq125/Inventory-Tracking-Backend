import { NextFunction, Request, Response } from "express";
import { usersServiceClass } from "../services";
import { UnexpectedError } from "../../errors/UnexpectedError";
import { GenerateOTP } from "../../utils";

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
      const userCreationResponse = await this.usersService.createUnverifiedUser(email);
      res.status(200).json({
        message:'OK|SUCCESS',
        ...userCreationResponse
      })
    } catch (err: any) {
      next(err);
    }
  };
  verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
    try{
      const {email, OTP} = req.body;
      const exists = await this.usersService.checkAndFetchUser(email);
      if (!exists) {
        return res.status(200).json({
          message: "OK|SUCCESS",
          redirectTo: "SIGNUP"
        });
      }
      const check = GenerateOTP(OTP).compareHash(exists.otp ?? '')
      if (!check){
        res.status(401).json({
          errors:[
            {
              message:'Your OTP did not match!'
            }
          ]
        })
      }
      res.status(200).json({
        message:'OK|SUCCESS',
        response:'OTP Successfully Verified!',
      })
    }catch(err: any){
      next(err)
    }
  }
}

export default userControllerClass;

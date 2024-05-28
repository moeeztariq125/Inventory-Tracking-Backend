import { IUserModelAttrs, signUpStatus } from "../../shared/interfaces";
import { UserRepository } from "../../repositories";
import { signupCreationObj } from "../contracts/Users.contracts";
import { GenerateOTP } from "../../utils";

class usersServiceClass {
  private userRepo: UserRepository;
  constructor(userRepo: UserRepository) {
    this.userRepo = userRepo;
  }

  async signup(
    user: Partial<signupCreationObj>
  ): Promise<Partial<IUserModelAttrs> | null> {
    try {
      const createdUser = await this.userRepo.create(user);
      return createdUser;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  /**
   * Method to check if user exists in database
   * @param email - Email address of the user
   * @returns A Promise that resolves to a boolean indicating whether the user exists
   */
  async checkUser(email: string): Promise<boolean> {
    try {
      const user = await this.userRepo.findOne({
        where: { email },
        attributes: ["email"]
      });
      return user ? true : false;
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async checkAndFetchUser(email: string): Promise<Partial<IUserModelAttrs>> {
    try {
      const user = await this.userRepo.findOne({
        where: { email }
      });
      return user;
    } catch (err: any) {
      throw new Error(err);
    }
  }
  /**
   * Method to create user in database and send email
   * @param email
   * @returns void
   */
  async createUnverifiedUser(
    email: string
  ): Promise<{ userCreation: Boolean; OTP: Boolean; otpValue?: string }> {
    const otp = GenerateOTP();
    const user = await this.userRepo.create({
      email,
      signupStatus: signUpStatus.PENDING_VERIFICATION,
      otp: otp.hashOTP()
    });
    if (!user) {
      return {
        userCreation: false,
        OTP: false
      }; //user creation failed
    }
    console.log(`send otp mail - ${otp.getOTP}`);
    return {
      userCreation: true,
      OTP: true,
      otpValue: otp.getOTP()
    };
  }
}

export default usersServiceClass;

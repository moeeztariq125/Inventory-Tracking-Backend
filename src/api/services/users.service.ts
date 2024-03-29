import { IUserModelAttrs } from "../../shared/interfaces";
import { UserRepository } from "../../repositories";
import { signupCreationObj } from "../contracts/Users.contracts";

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
      const user = await this.userRepo.findOne({ where: { email } });
      const ret = user ? true : false;
      return ret;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }
}

export default usersServiceClass;

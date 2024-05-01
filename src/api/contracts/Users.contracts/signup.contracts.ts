import { signUpStatus } from "../../../shared/interfaces";

export interface signupCreationObj {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
  role: string;
  signupStatus: signUpStatus;
}

export interface signupReturnObj {}

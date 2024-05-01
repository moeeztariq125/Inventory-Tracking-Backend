
export enum signUpStatus {
  ACTIVE = "active",
  PENDING_VERIFICATION = "pending_verification"
}

interface IUserModelAttrs {
  userID: string;
  firstName: string;
  lastName: string;
  dob: Date;
  role: string;
  profilePicture: string;
  email: string;
  otp: string;
  signupStatus: signUpStatus;
}

export default IUserModelAttrs;

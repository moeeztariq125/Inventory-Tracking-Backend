import crypto from "crypto";

class OTP {
  private otp: string = "";
  private length: number = 6;
  constructor(otp: string = "") {
    console.log(!otp);
    if (!otp) this.generateOTP();
    else this.otp = otp;
  }

  private generateOTP(): void {
    const digits = "0123456789";
    let otp = "";
    for (let i = 0; i < this.length; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    this.otp = otp;
  }

  getOTP(): string {
    return this.otp;
  }

  hashOTP(): string {
    const hash = crypto.createHash("sha256");
    hash.update(this.otp);
    return hash.digest("hex");
  }
}

export default function GenerateOTP(otp: string = "") {
  return new OTP(otp);
}

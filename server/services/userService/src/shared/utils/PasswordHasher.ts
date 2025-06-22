import bcrypt from "bcryptjs";

export default class PasswordHasher {
  private readonly saltRounds = 12;
  async hash(password: string) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async compare(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

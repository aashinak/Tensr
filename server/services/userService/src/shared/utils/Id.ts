import { v4 as uuidv4 } from "uuid";

export default class Id {
  static generateUserId() {
    const userId = `user_${uuidv4()}`;
    return userId;
  }
}

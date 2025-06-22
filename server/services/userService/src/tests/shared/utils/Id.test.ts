import Id from "../../../shared/utils/Id";

describe("Id.generateUserId", () => {
  it("Should generate userId starts with 'user_'", () => {
    const userId = Id.generateUserId();
    expect(userId.startsWith("user_")).toBe(true);
  });

  it("Should always generate unique id", () => {
    const userId1 = Id.generateUserId();
    const userId2 = Id.generateUserId();
    expect(userId1).not.toBe(userId2);
  });

  it("Should generate a UUIDv4 format after the prefix", () => {
    const userId = Id.generateUserId();
    const uuidPart = userId.replace("user_", "");
    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuidV4Regex.test(uuidPart)).toBe(true);
  });
});

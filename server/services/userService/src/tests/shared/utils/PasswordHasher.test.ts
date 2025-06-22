import PasswordHasher from "../../../shared/utils/PasswordHasher";

describe("Password Hasher", () => {
  const password = "Secure@123";
  let hasher: PasswordHasher;
  beforeAll(() => {
    hasher = new PasswordHasher();
  });
  it("Should hash password", async () => {
    const hashedPassword = await hasher.hash(password);
    expect(typeof hashedPassword).toBe("string");
    expect(hashedPassword).not.toBe(password);
    expect(hashedPassword.length).toBeGreaterThan(30);
  });

  it("Should verify the correct password", async () => {
    const hashedPassword = await hasher.hash(password);
    const isMatch = await hasher.compare(password, hashedPassword);
    expect(isMatch).toBe(true);
  });

  it("Should reject the wrong password", async () => {
    const hashedPassword = await hasher.hash(password);
    const isMatch = await hasher.compare("wrong password", hashedPassword);
    expect(isMatch).toBe(false);
  });
});

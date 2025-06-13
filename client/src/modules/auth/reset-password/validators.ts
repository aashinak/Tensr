import { z } from "zod";

// Password must be at least 8 characters long, 
// contain at least one uppercase letter, 
// one lowercase letter, one number
// and one special character
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .regex(
        passwordRegex,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });


// JWT format: header.payload.signature
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
// url parameters validation for reset password
export const resetParamsSchema = z.object({
  token: z.string().regex(jwtRegex, "Invalid JWT format"),
  email: z.string().email("Invalid email address"),
});

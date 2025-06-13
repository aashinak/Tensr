import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/;

export const signInSchema = z.object({
  identifier: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Must be at least 3 characters")
    .refine((val) => usernameRegex.test(val) || emailRegex.test(val), {
      message: "Enter a valid username or email",
    }),
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .regex(
      passwordRegex,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const forgotEmailSchema = z.object({
  forgotEmail: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address"),
});

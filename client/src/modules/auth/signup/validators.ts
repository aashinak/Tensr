import { z } from "zod";

// This schema validates the signup form data
// It checks for username, fullname, email, password and confirmPassword fields
// Each field has specific validation rules, such as minimum length and format
// The password and confirmPassword fields must match
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

export const signupSchema = z
  .object({
    username: z
      .string()
      .trim()
      .toLowerCase()
      .min(3, "Username must be at least 3 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    fullname: z
      .string()
      .trim()
      .min(3, "Fullname must be at least 3 characters"),
    email: z.string().trim().email("Invalid email"),
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

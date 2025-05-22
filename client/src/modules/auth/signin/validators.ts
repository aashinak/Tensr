import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;

export const signInSchema = z.object({
  identifier: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Must be at least 3 characters")
    .refine((val) => usernameRegex.test(val) || emailRegex.test(val), {
      message: "Enter a valid username or email",
    }),
  password: z.string().trim().min(8, "Password must be at least 8 characters"),
});

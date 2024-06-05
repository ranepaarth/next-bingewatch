import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(4, { message: "Your password must be between 4 and 60 characters" }),
});


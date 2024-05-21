import * as z from "zod"

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
})

export type SignInType = z.infer<typeof SignInSchema>

import * as z from "zod"

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
})

export type SignInType = z.infer<typeof SignInSchema>

export const SignInResponseSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  message: z.string(),
  expiredAt: z.string(),
})

export type SignInResponseType = z.infer<typeof SignInResponseSchema>

export const RegisterSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .strict()
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      })
    }
  })

export type RegisterType = z.infer<typeof RegisterSchema>

import * as z from "zod"

export const LoginBody = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
})

export type LoginBodyType = z.infer<typeof LoginBody>

export const LoginRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
})

export type LoginResType = z.infer<typeof LoginRes>

export const RegisterBody = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(256),
    email: z.string().email({ message: "Invalid email format" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(100),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(100),
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

export type RegisterBodyType = z.infer<typeof RegisterBody>

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
})

export type RegisterResType = z.infer<typeof RegisterRes>

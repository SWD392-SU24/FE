import * as z from "zod"

import { createCommonResSchema } from "@/lib/schemas/common.schema"

// ! SIGN IN
export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
})

export type SignInType = z.infer<typeof SignInSchema>

export const SignInResSchema = createCommonResSchema(
  z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    expiredAt: z.date(),
  })
)

export type SignInResType = z.infer<typeof SignInResSchema>

// ! SIGN UP
export const SignUpCustomerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(12, { message: "Password must be at most 12 characters" })
      .refine((value) => /[!@#]/.test(value), {
        message: "Password must contain at least one special character (!,@,#)",
      }),
    confirmedPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmedPassword, {
    message: "Passwords do not match",
    path: ["confirmedPassword"],
  })

export type SignUpCustomerType = z.infer<typeof SignUpCustomerSchema>

export const SignUpOwnerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(12, { message: "Password must be at most 12 characters" })
      .refine((value) => /[!@#]/.test(value), {
        message: "Password must contain at least one special character (!,@,#)",
      }),
    citizenId: z.string().refine((value) => /^\d{11}$/.test(value), {
      message: "Citizen ID must be exactly 11 digits",
    }),
    confirmedPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmedPassword, {
    message: "Passwords do not match",
    path: ["confirmedPassword"],
  })

export type SignUpOwnerType = z.infer<typeof SignUpOwnerSchema>

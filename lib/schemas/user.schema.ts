import * as z from "zod"

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

export const AddUserSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string(),
  email: z.string().min(1, { message: "Email is required" }).email(),
  dateOfBirth: z.date(),
  phoneNumber: z.string(),
  address: z.string(),
  sex: z.number(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
})

export const UpdateUserSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string(),
  email: z.string().min(1, { message: "Email is required" }).email(),
  phoneNumber: z.string().optional(),
  dateOfBirth: z.date().optional(),
  address: z.string().optional(),
  sex: z.number(),
})

import * as z from "zod"

import { createCommonResSchema } from "@/lib/schemas/common.schema"
import { UserSchema } from "@/lib/schemas/user.schema"

export const DentistSchema = UserSchema.omit({
  role: true,
  sex: true,
  id: true,
  dateOfBirth: true,
  address: true,
}).extend({
  dentistId: z.string().uuid({ message: "Invalid ID" }),
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
})

export type DentistType = z.infer<typeof DentistSchema>

export const DentistResSchema = createCommonResSchema(z.array(DentistSchema))

export type DentistResType = z.infer<typeof DentistResSchema>

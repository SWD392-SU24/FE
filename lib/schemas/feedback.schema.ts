import * as z from "zod"

import { createCommonResSchema } from "@/lib/schemas/common.schema"

export const FeedbackSchema = z.object({
  clinicId: z.coerce.number(),
  clinicName: z.string().min(2, { message: "Clinic name is required" }),
  customerId: z.string().uuid({ message: "Invalid ID" }),
  customerName: z.string().min(2, { message: "Customer name is required" }),
  rating: z.coerce
    .number()
    .min(1, { message: "Rating is required" })
    .max(5, { message: "Rating must be between 1 and 5" }),
  feedbackDescription: z.string(),
  feedbackDate: z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
})

export type FeedbackType = z.infer<typeof FeedbackSchema>

export const FeedbackResSchema = createCommonResSchema(z.array(FeedbackSchema))

export type FeedbackResType = z.infer<typeof FeedbackResSchema>

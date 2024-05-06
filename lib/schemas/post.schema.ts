import * as z from "zod"

export const PostSchema = z.object({
  title: z.string(),
  body: z.string(),
  userId: z.coerce.number(),
})

export type AddPostType = z.infer<typeof PostSchema>

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { AddPostType, PostSchema } from "@/lib/schemas/post.schema"

import { useAddPost } from "@/hooks/use-post"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PostForm() {
  const { mutateAsync: addPost } = useAddPost()

  const form = useForm<AddPostType>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
      title: "",
      body: "",
      userId: 1,
    },
  })

  async function onSubmit(values: AddPostType) {
    try {
      await addPost(values)
      toast.success("Post created successfully")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong")
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <Label>Title</Label>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <Label>Body</Label>
              <FormControl>
                <Input placeholder="Body" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userId"
          render={({ field }) => (
            <FormItem>
              <Label>User Id</Label>
              <FormControl>
                <Input placeholder="ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="sm" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </form>
    </Form>
  )
}

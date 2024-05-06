import { useSearchParams } from "next/navigation"

import { getPosts } from "@/actions/posts-action"
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query"
import axios from "axios"

import { IPost } from "@/types/post.interface"

import { AddPostType } from "@/lib/schemas/post.schema"

export function useGetAllPost() {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await getPosts()
      return data
    },
  })
}

export function useAddPost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (post: AddPostType) => {
      const { data } = await axios.post(
        "https://648867740e2469c038fda6cc.mockapi.io/api/v1/post",
        post
      )
      return data
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

export function useDeletePost() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await axios.delete(
        `https://648867740e2469c038fda6cc.mockapi.io/api/v1/post/${id}`
      )
      return data
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  })
}

export function useGetPostsWithFilter() {
  const searchParams = useSearchParams()
  const title = searchParams.get("title")

  return useQuery<IPost[]>({
    queryKey: ["posts", { title }],
    queryFn: async () => {
      const url = title
        ? `https://648867740e2469c038fda6cc.mockapi.io/api/v1/post?search=${title}`
        : "https://648867740e2469c038fda6cc.mockapi.io/api/v1/post"
      const { data } = await axios.get(url)
      return data
    },
    placeholderData: keepPreviousData,
  })
}

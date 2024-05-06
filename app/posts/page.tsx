import { getPosts } from "@/actions/posts-action"
import PostList from "@/containers/post-page/post-list"
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

export default async function Posts() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["posts", { title: null }],
    queryFn: getPosts,
  })

  const dehydratedState = dehydrate(queryClient)
  return (
    <section className="container my-4">
      <HydrationBoundary state={dehydratedState}>
        <PostList />
      </HydrationBoundary>
    </section>
  )
}

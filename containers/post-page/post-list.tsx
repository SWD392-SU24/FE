"use client"

import { columns } from "@/containers/post-page/data-table/columns"
import { DataTable } from "@/containers/post-page/data-table/data-table"
import PostFilter from "@/containers/post-page/post-filter"
import PostForm from "@/containers/post-page/post-form"

import { useGetPostsWithFilter } from "@/hooks/use-post"

import { Card } from "@/components/ui/card"

export default function PostList() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useGetPostsWithFilter()

  if (isError) return <p>Error {error.message}</p>

  return (
    <div>
      <h1 className="text-3xl font-bold">Post List</h1>
      <div className="mt-4">
        <PostFilter />
      </div>

      <Card className="mt-4 p-4">
        <PostForm />
      </Card>
      {isLoading && <p>Loading...</p>}

      {isSuccess && posts?.length > 0 && (
        <Card className="mt-4 w-full flex-1 flex-col p-4">
          <DataTable columns={columns} data={posts} />
        </Card>
      )}

      {posts?.length === 0 && (
        <div className="mt-4 flex h-[400px] flex-col items-center justify-center rounded-md border p-4">
          <h1 className="text-3xl font-bold">No post found</h1>
          <p className="text-pretty text-muted-foreground">
            You can create a new post from the form
          </p>
        </div>
      )}
    </div>
  )
}

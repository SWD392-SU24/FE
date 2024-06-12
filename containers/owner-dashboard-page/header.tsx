import React from "react"

export default function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 h-12 w-full border-b bg-zinc-50">
      <div className="mx-4 flex h-12 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <h1 className="text-sm text-muted-foreground">{title}</h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* <UserAvatar /> */}
        </div>
      </div>
    </header>
  )
}

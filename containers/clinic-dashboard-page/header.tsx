import React from "react"

import { SheetMenu } from "@/containers/clinic-dashboard-page/sheet-menu"
import { UserAvatar } from "@/containers/clinic-dashboard-page/user-avatar"

export default function Header() {
  return (
    <header className="sticky top-0 z-[19] w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:shadow-secondary">
      <div className="mx-4 flex h-14 items-center sm:mx-8">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LogOut } from "lucide-react"

import { getOwnerMenuList } from "@/lib/constants/sidebar-menu-list"

export default function Sidebar() {
  const pathname = usePathname()
  const ownerMenus = getOwnerMenuList(pathname)
  return (
    <aside className="fixed left-0 top-0 z-20 h-screen w-60 border-r bg-zinc-50">
      <div className="flex h-12 w-full items-center border-b">
        <h1 className="ml-4 font-semibold">Dashboard</h1>
      </div>
      {ownerMenus.map(({ groupLabel, menus }) => (
        <div className="h-auto border-b text-sm text-muted-foreground">
          <div className="my-6 ml-4 flex flex-col space-y-3 text-sm">
            <span className="text-muted-foreground/80">{groupLabel}</span>
            {menus.map(({ href, label, active }) => (
              <Link
                href={href}
                key={label}
                className={`hover:text-black/90 ${
                  active ? "text-black/90" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="ml-4 justify-start border-b py-4 text-sm text-muted-foreground">
        <button type="button" className="flex items-center hover:text-black/90">
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"

import { useSidebarToggle } from "@/stores/use-sidebar-toggle"
import { useStore } from "@/stores/use-store"

import { cn } from "@/lib/utils"

import { Menu } from "@/components/sidebar/menu"
import { SidebarToggle } from "@/components/sidebar/sidebar-toggle"

export default function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-20 h-screen -translate-x-full border-r bg-white transition-[width] duration-300 ease-in-out lg:translate-x-0",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative flex h-full flex-col overflow-y-auto px-3 py-4 shadow-sm dark:shadow-zinc-300">
        <Link
          href="/dashboard/clinic"
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap transition-transform duration-300 ease-in-out",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
        >
          <Image
            src={sidebar?.isOpen ? "/logo/logo-full.png" : "/logo/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className={cn(sidebar?.isOpen ? "h-10 w-40" : "size-10")}
          />
        </Link>

        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  )
}

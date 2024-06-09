"use client"

import React from "react"

import Footer from "@/containers/clinic-dashboard-page/footer"
import { useSidebarToggle } from "@/stores/use-sidebar-toggle"
import { useStore } from "@/stores/use-store"

import { cn } from "@/lib/utils"

import Sidebar from "@/components/sidebar"

export default function ClinicDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state)

  if (!sidebar) return null

  return (
    <React.Fragment>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-white transition-[margin-left] duration-300 ease-in-out",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
      <footer
        className={cn(
          "transition-[margin-left] duration-300 ease-in-out",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        <Footer />
      </footer>
    </React.Fragment>
  )
}

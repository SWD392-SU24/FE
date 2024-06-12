"use client"

import React from "react"

import { redirect, usePathname } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  if (pathname === "/dashboard") {
    redirect("/dashboard/clinics")
  }
  return <div>{children}</div>
}

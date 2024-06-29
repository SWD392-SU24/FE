import React from "react"

import { headers } from "next/headers"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get headers and extract x-url
  const headersList = headers()
  const headerUrl = headersList.get("x-url") || ""

  let pathname = ""

  const url = new URL(headerUrl)
  pathname = url.pathname

  // Redirect if the pathname is /dashboard
  if (pathname === "/dashboard") {
    redirect("/dashboard/clinics")
  }

  return <div>{children}</div>
}

"use client"

import React from "react"

import { usePathname } from "next/navigation"

import ClinicDashboardLayout from "@/containers/clinic-dashboard-page"
import Footer from "@/containers/clinic-dashboard-page/footer"
import Header from "@/containers/clinic-dashboard-page/header"
import Sidebar from "@/containers/owner-dashboard-page/sidebar"

const isClinicWithId = (pathname: string) => {
  const clinicIdPattern = /^\/dashboard\/clinics\/.+$/
  return clinicIdPattern.test(pathname)
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isClinicDashboard = pathname === "/dashboard/clinics"

  if (isClinicDashboard) {
    return (
      <div>
        <Sidebar />
        <main className="ml-60 min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out">
          {children}
        </main>
        <footer className="ml-60 bg-zinc-50">
          <Footer />
        </footer>
      </div>
    )
  }

  if (isClinicWithId(pathname)) {
    return (
      <ClinicDashboardLayout>
        <Header />
        {children}
      </ClinicDashboardLayout>
    )
  }

  return null
}

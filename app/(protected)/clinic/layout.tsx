import React from "react"

import ClinicDashboardLayout from "@/containers/clinic-dashboard-page"

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ClinicDashboardLayout>{children}</ClinicDashboardLayout>
    </div>
  )
}

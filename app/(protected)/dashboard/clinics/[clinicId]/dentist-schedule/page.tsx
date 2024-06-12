import React from "react"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import DentistSchedule from "@/containers/dentist-schedule-page/dentist-schedule"
import ScheduleToolbar from "@/containers/dentist-schedule-page/schedule-toolbar"

export default function Page() {
  return (
    <ClinicDashboardWrapper title="Dentist Schedule">
      <div className="space-y-4">
        <ScheduleToolbar />
        <DentistSchedule />
      </div>
    </ClinicDashboardWrapper>
  )
}

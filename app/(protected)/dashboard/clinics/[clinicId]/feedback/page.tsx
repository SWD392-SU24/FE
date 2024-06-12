import React from "react"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import ManageFeedback from "@/containers/manage-feedback-page/manage-feedback"

export default function Page() {
  return (
    <ClinicDashboardWrapper title="Feedback">
      <ManageFeedback />
    </ClinicDashboardWrapper>
  )
}

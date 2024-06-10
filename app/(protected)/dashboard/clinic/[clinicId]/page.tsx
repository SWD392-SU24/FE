import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"

export default function Page({ params }: { params: { clinicId: string } }) {
  return (
    <ClinicDashboardWrapper>
      This is dashboard/clinic/{params.clinicId}
    </ClinicDashboardWrapper>
  )
}

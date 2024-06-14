import ChartCard from "@/containers/clinic-dashboard-page/chart-card"
import { ClinicServices } from "@/containers/clinic-dashboard-page/chart-clinic-services"
import { DailyClinicVisits } from "@/containers/clinic-dashboard-page/chart-clinic-visits"
import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"

import { Card } from "@/components/ui/card"

export default function Page({ params }: { params: { clinicId: string } }) {
  return (
    <ClinicDashboardWrapper title="Dashboard">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold">Clinic Dashboard</h2>
        <p className="text-gray-600">Clinic ID: {params.clinicId}</p>
      </div>
      <ChartCard />
      <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-8">
        <Card className="rounded-lg bg-white p-6">
          <DailyClinicVisits />
        </Card>
        <Card className="h-full rounded-lg bg-white p-6">
          <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Daily Clinic Service
          </h3>
          <div className="my-16 flex h-full flex-col items-center">
            <ClinicServices />
          </div>
        </Card>
      </div>
    </ClinicDashboardWrapper>
  )
}

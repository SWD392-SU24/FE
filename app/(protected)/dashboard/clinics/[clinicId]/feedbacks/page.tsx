"use client"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import { DataTable } from "@/containers/clinic-feedback-page/data-table"
import { columns } from "@/containers/clinic-feedback-page/data-table/columns"

import { useGetFeedbackByClinicId } from "@/hooks/use-manage-feedback"

import { Loader } from "@/components/loader"
import { Spinner } from "@/components/spinner"

export default function Page() {
  const { data, isLoading, isError, isFetching } = useGetFeedbackByClinicId("2")

  if (isLoading) return <Spinner />
  if (isError || !data) return <div>Not found</div>

  return (
    <ClinicDashboardWrapper title="Feedback">
      <Loader loading={isFetching}>
        <DataTable columns={columns} data={data} />
      </Loader>
    </ClinicDashboardWrapper>
  )
}

"use client"

import React from "react"

import { useParams } from "next/navigation"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import { DataTable } from "@/containers/clinic-manage-dentist-page/data-table"
import { dentistColumns } from "@/containers/clinic-manage-dentist-page/data-table/columns"

import { useGetDentistsByClinicId } from "@/hooks/use-manage-dentist"

import { Loader } from "@/components/loader"
import { Spinner } from "@/components/spinner"

export default function Page() {
  const { clinicId } = useParams()
  const { data, isLoading, isError, isFetching } = useGetDentistsByClinicId(
    clinicId as string
  )

  if (isLoading) return <Spinner />
  if (isError || !data) return <div>Not found</div>

  return (
    <ClinicDashboardWrapper title="Manage Dentists">
      <Loader loading={isFetching}>
        <DataTable columns={dentistColumns} data={data} />
      </Loader>
    </ClinicDashboardWrapper>
  )
}

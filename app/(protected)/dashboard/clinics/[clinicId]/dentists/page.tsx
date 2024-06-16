"use client"

import React, { useCallback, useState } from "react"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import { DataTable } from "@/containers/dentist-management-page/data-table/data-table"
import { columns } from "@/containers/dentist-management-page/data-table/dentist-table-column"

import { IUserDashboard } from "@/types/user.interface"

// Assuming you have a DataTable component
// import { columns } from "@/lib/columns"
import { useDeleteDentist, useGetAllDentist } from "@/hooks/use-manage-dentist"

// import DataTable from "@/components/DataTable"

// Assuming you have a columns definition

export default function Page() {
  const [pageIndex, setPageIndex] = useState<number>(1)

  const deleteMutation = useDeleteDentist()
  const handleChangePage = (pageIndexChange: number) => {
    setPageIndex(pageIndexChange + 1)
  }

  const { data, isLoading } = useGetAllDentist(pageIndex)

  const onDelete = useCallback(
    (dentist: IUserDashboard) => {
      if (dentist?.id) {
        deleteMutation.mutate(dentist.id, {
          onSuccess: () => {},
          onError: () => {},
        })
      }
    },
    [deleteMutation]
  )

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <ClinicDashboardWrapper title="Dentist Management">
      <div className="py-5">
        <DataTable
          data={data?.items || []}
          columns={columns({ onDelete })}
          pageIndex={data?.currentPage ? data.currentPage - 1 : 0}
          pageCount={data?.totalPages || 1}
          handleChangePage={handleChangePage}
        />
      </div>
    </ClinicDashboardWrapper>
  )
}

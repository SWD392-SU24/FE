"use client"

import React from "react"

import ClinicDashboardWrapper from "@/containers/clinic-dashboard-page/clinic-dashboard-wrapper"
import { DataTable } from "@/containers/clinic-feedback-page/data-table"
import { useQuery } from "@tanstack/react-query"

export default function Page() {
  return (
    <ClinicDashboardWrapper title="Manage Dentists"></ClinicDashboardWrapper>
  )
}

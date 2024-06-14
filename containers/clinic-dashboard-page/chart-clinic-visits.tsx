"use client"

import React from "react"

import { AreaChart } from "@tremor/react"

import { DAILY_CLINIC_VISITS } from "@/lib/constants/data-statistic"

interface DailyVisitData {
  date: string
  NumberOfVisits: number
}

const dataFormatter = (number: number) =>
  Intl.NumberFormat("us").format(number).toString()

export function DailyClinicVisits() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
          Daily Clinic Visits
        </h3>
      </div>
      <AreaChart
        className="mt-6"
        data={DAILY_CLINIC_VISITS.data as DailyVisitData[]}
        index="date"
        categories={["NumberOfVisits"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
        xAxisLabel="Date"
        yAxisLabel="Number of Visits"
      />
    </div>
  )
}

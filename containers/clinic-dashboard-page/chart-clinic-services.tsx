"use client"

import { DonutChart, Legend } from "@tremor/react"

import { CLINIC_SERVICES } from "@/lib/constants/data-statistic"

interface ClinicService {
  name: string
  usage: number
}

const valueFormatter = (number: number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`

export function ClinicServices() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row md:space-x-6">
        <div className="mb-4 md:mb-0">
          <DonutChart
            data={CLINIC_SERVICES.data as ClinicService[]}
            category="usage"
            index="name"
            valueFormatter={valueFormatter}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="w-40"
          />
        </div>
        <div>
          <Legend
            categories={CLINIC_SERVICES.data.map((service) => service.name)}
            colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
            className="max-w-xs"
          />
        </div>
      </div>
    </div>
  )
}

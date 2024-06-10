"use client"

import useOwnerCalendar from "@/stores/use-owner-calendar"

import { Button } from "@/components/ui/button"
import { DateRangePicker } from "@/components/ui/date-range-picker"

export default function ScheduleToolbar() {
  const { setDateRange, dateRange } = useOwnerCalendar()

  return (
    <div className="flex items-center justify-end gap-4">
      <Button>Add a new schedule</Button>
      <DateRangePicker
        onUpdate={(value) => {
          setDateRange(value.range)
        }}
        initialDateFrom={dateRange.from}
        initialDateTo={dateRange.to}
        align="start"
        showCompare={false}
      />
    </div>
  )
}

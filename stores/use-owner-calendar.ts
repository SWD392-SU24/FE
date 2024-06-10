import { endOfDay, endOfWeek, startOfDay, startOfWeek } from "date-fns"
import { DateRange } from "react-day-picker"
import { create } from "zustand"

import { getLabelsForCalendarView } from "@/lib/utils"

interface OwnerCalendarProps {
  viewMode: "day" | "week" | "month" | "year"
  timeLabels: { dateOfTheWeek: string; date: string }[]
  dateRange: DateRange
  currentDateRange: DateRange
  setDateRange: (dateRange: DateRange) => void
}
const useOwnerCalendar = create<OwnerCalendarProps>((set) => {
  const initialDateRange = {
    from: startOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
    to: endOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
  }

  return {
    viewMode: "week",
    timeLabels: getLabelsForCalendarView("week", {
      start: initialDateRange.from,
      end: initialDateRange.to,
    }),
    dateRange: initialDateRange,
    currentDateRange: {
      from: startOfDay(new Date()),
      to: endOfDay(new Date()),
    },
    setDateRange: (dateRange: DateRange) => set({ dateRange }),
  }
})

export default useOwnerCalendar

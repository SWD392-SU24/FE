import { type ClassValue, clsx } from "clsx"
import {
  eachDayOfInterval,
  eachHourOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
  endOfDay,
  endOfMonth,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfYear,
} from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getLabelsForCalendarView(
  viewMode: "day" | "week" | "month" | "year",
  dateRange: { start: Date; end: Date }
): { dateOfTheWeek: string; date: string }[] {
  switch (viewMode) {
    case "day":
      return eachHourOfInterval({
        start: startOfDay(dateRange.start),
        end: endOfDay(dateRange.end),
      }).map((hour) => ({
        dateOfTheWeek: format(hour, "cccc"),
        date: format(hour, "dd, MMMM"),
      }))
    case "week":
      return eachDayOfInterval({
        start: dateRange.start,
        end: dateRange.end,
      }).map((day) => ({
        dateOfTheWeek: format(day, "cccc"),
        date: format(day, "dd, MMMM"),
      }))
    case "month":
      return eachWeekOfInterval({
        start: startOfMonth(dateRange.start),
        end: endOfMonth(dateRange.end),
      }).map((week) => ({
        dateOfTheWeek: `Week ${format(week, "wo")}`,
        date: format(week, "dd, MMMM"),
      }))
    case "year":
      return eachMonthOfInterval({
        start: startOfYear(dateRange.start),
        end: endOfYear(dateRange.end),
      }).map((month) => ({
        dateOfTheWeek: format(month, "MMMM"),
        date: format(month, "dd, MMMM"),
      }))
    default:
      return []
  }
}

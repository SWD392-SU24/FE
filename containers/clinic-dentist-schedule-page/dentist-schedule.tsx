"use client"

import DentistScheduleAvatarCell from "@/containers/clinic-dentist-schedule-page/dentist-schedule-avatar-cell"
import DentistScheduleCard from "@/containers/clinic-dentist-schedule-page/dentist-schedule-card"
import useOwnerCalendar from "@/stores/use-owner-calendar"
import { ChevronRight, Dot, EllipsisVertical, User } from "lucide-react"

import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DentistSchedule() {
  const { timeLabels } = useOwnerCalendar()
  return (
    <div className="flex max-h-[65vh] flex-col">
      <div className="calendar-scroll flex-grow overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="sticky top-0 bg-background text-center">
                GMT <br /> <span className="text-xs">+07:00</span>
              </TableHead>
              {timeLabels.map((label) => (
                <TableHead
                  key={label.date}
                  className={cn(
                    "sticky top-0 z-10 h-20 min-w-56 gap-y-2 border-x bg-background text-center lg:min-w-72"
                  )}
                >
                  <p className="text-lg text-primary">{label.date}</p>
                  <p className="text-xs">{label.dateOfTheWeek}</p>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow key={index}>
                <DentistScheduleAvatarCell
                  avatarUrl="/users/user-1.png"
                  name="User 1"
                />
                <TableCell className={cn("border bg-background")}>
                  <div className="grid grid-flow-row grid-cols-1 gap-2">
                    {Array.from({ length: 1 }).map((_, index) => (
                      <DentistScheduleCard key={index} />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

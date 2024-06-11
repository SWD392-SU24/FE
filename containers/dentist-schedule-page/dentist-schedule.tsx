"use client"

import DentistScheduleAvatarCell from "@/containers/dentist-schedule-page/dentist-schedule-avatar-cell"
import useOwnerCalendar from "@/stores/use-owner-calendar"
import { ChevronRight, Dot, EllipsisVertical, User } from "lucide-react"

import { cn } from "@/lib/utils"

import { Card } from "@/components/ui/card"
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
                    {Array.from({ length: 2 }).map((_, index) => (
                      <Card
                        className="block rounded-lg px-3 py-2 shadow-sm shadow-blue-100"
                        tabIndex={index}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              Finished
                            </span>
                            <Dot className="mx-2 size-3" />
                            <p className="text-xs text-muted-foreground">
                              10,June 2024
                            </p>
                          </div>
                          <button type="button">
                            <EllipsisVertical className="size-4" />
                          </button>
                        </div>
                        <div className="mt-2">
                          <h1 className="text-base font-semibold">
                            Dentist Shift
                          </h1>
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <span>09:00 A.M</span>
                            <ChevronRight className="size-4" />
                            <span>11:30 A.M</span>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center gap-8 text-xs">
                          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <User className="size-4 text-primary" />
                            <div className="mt-1.5 sm:mt-0">
                              <p className="text-gray-500">Patients</p>

                              <p className="font-medium">2 patients</p>
                            </div>
                          </div>
                        </div>
                      </Card>
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

import Image from "next/image"

import { Avatar } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Slot {
  id: string
  day: number
  name: string
  specialty: string
  duration: string
  image: string
}

interface Schedule {
  id: string
  time: string
  slots: (Slot | null)[]
}

interface ScheduleTableProps {
  schedule: Schedule[]
  daysOfWeek: string[]
  getDateOfCurrentWeek: (dayIndex: number) => string
}

function ScheduleTable({
  schedule,
  daysOfWeek,
  getDateOfCurrentWeek,
}: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto p-4">
      <Table className="min-w-full table-auto border-collapse">
        <TableHeader>
          <TableRow>
            <TableHead className="w-28 border p-4 font-bold text-gray-600">
              Time Table
            </TableHead>
            {daysOfWeek.map((day, index) => (
              <TableHead key={day} className="w-28 border p-4 font-bold">
                <div className="flex flex-col items-center">
                  <span>{day}</span>
                  <span>{getDateOfCurrentWeek(index)}</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {schedule.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="border p-4 font-bold text-gray-600">
                {row.time}
              </TableCell>
              {row.slots.map((slot, index) => (
                <TableCell
                  key={slot ? slot.id : `empty-${row.id}-${index}`}
                  className="w-32 border p-4"
                >
                  {slot ? (
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <Image
                            src={slot.image}
                            width={50}
                            height={50}
                            alt={slot.name}
                            className="rounded-full"
                          />
                        </Avatar>
                        <div className="text-left">
                          <span className="block font-semibold">
                            {slot.name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {slot.specialty}
                          </span>
                        </div>
                      </div>
                      <div className="w-full rounded border bg-blue-50 p-2 text-center">
                        <span className="text-nowrap text-xs text-primary">
                          {slot.duration}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-16" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ScheduleTable

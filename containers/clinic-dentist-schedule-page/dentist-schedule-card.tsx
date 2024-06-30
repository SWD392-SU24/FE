import React from "react"

import { ChevronRight, Dot, EllipsisVertical, User } from "lucide-react"

import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DentistScheduleCard() {
  return (
    <Dialog>
      <Card className="block rounded-lg px-3 py-2 shadow-sm shadow-blue-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="rounded-sm bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Finished
            </span>
            <Dot className="mx-2 size-3" />
            <p className="text-xs text-muted-foreground">10,June 2024</p>
          </div>
          <DialogTrigger asChild>
            <button type="button">
              <EllipsisVertical className="size-4" />
            </button>
          </DialogTrigger>
        </div>
        <div className="mt-2">
          <h1 className="text-base font-semibold">Dentist Shift</h1>
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
      <DialogContent className="h-[90vh]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

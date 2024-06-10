import React from "react"

import { AvatarFallback } from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { TableCell } from "@/components/ui/table"

interface DentistScheduleAvatarCellProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  avatarUrl: string
  name: string
  className?: string
}
export default function DentistScheduleAvatarCell({
  avatarUrl,
  name,
  className,
  ...props
}: DentistScheduleAvatarCellProps) {
  return (
    <TableCell
      className={cn("sticky left-0 z-10 border-y bg-background", className)}
      {...props}
    >
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name[0] ?? "A"}</AvatarFallback>
        </Avatar>
        <div className="">
          <h2 className="text-nowrap text-sm font-semibold">{name}</h2>
          <span className="text-nowrap text-xs text-muted-foreground">
            Doctor 123
          </span>
        </div>
      </div>
    </TableCell>
  )
}

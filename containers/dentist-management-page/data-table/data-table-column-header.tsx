import React from "react"

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons"
import { Column } from "@tanstack/react-table"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-gray-100 data-[state=open]:text-gray-800"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" && (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsSorted() === "asc" && (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            )}
            {column.getIsSorted() !== "asc" &&
              column.getIsSorted() !== "desc" && (
                <CaretSortIcon className="ml-2 h-4 w-4" />
              )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <div>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
              Desc
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

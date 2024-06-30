"use client"

import { useState } from "react"

import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import AddDentistModal from "@/components/dialog/add-dentist-modal"
import SearchInput from "@/components/search-input"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [columnName, setColumnName] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Select value={columnName} onValueChange={setColumnName}>
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Select column to search" />
          </SelectTrigger>
          <SelectContent>
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanFilter() && column.id !== "actions"
              )
              .map((column) => (
                <SelectItem
                  key={column.id}
                  value={column.id}
                  onClick={() => setColumnName(column.id)}
                >
                  <span className="capitalize">{column.id}</span>
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <SearchInput
          placeholder="Search..."
          value={
            (table.getColumn(columnName)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(columnName)?.setFilterValue(event.target.value)
          }
          className="w-[150px] lg:w-[400px]"
        />

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 size-4" />
        Add Dentist
      </Button>
      <AddDentistModal open={open} setOpen={setOpen} />
    </div>
  )
}

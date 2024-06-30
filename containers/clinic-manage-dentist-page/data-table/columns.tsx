"use client"

import { DataTableRowActions } from "@/containers/clinic-manage-dentist-page/data-table/data-table-row-actions"
import { ColumnDef } from "@tanstack/react-table"

import { DentistType } from "@/lib/schemas/dentist.schema"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export const dentistColumns: ColumnDef<DentistType>[] = [
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dentist Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
  },

  {
    accessorKey: "actions",
    header: () => <span className="text-xs">Actions</span>,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]

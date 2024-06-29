"use client"

import { DataTableRowActions } from "@/containers/clinic-feedback-page/data-table/data-table-row-actions"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { FeedbackType } from "@/lib/schemas/feedback.schema"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export const columns: ColumnDef<FeedbackType>[] = [
  {
    accessorKey: "customerName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    accessorKey: "feedbackDescription",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Feedback Description" />
    ),
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => (
      <span className="flex items-center gap-1">
        <StarFilledIcon className="h-4 w-4 text-yellow-400" />{" "}
        {row.original.rating}
      </span>
    ),
  },
  {
    accessorKey: "feedbackDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Feedback Date" />
    ),
    cell: ({ row }) => (
      <span>
        {format(new Date(row.original.feedbackDate), "MMM dd, yyyy hh:mm aa")}
      </span>
    ),
  },
  {
    accessorKey: "actions",
    header: () => <span className="text-xs">Actions</span>,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]

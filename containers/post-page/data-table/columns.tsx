import { DataTableRowActions } from "@/containers/post-page/data-table/row-action"
import { ColumnDef } from "@tanstack/react-table"

import { IPost } from "@/types/post.interface"

import { Checkbox } from "@/components/ui/checkbox"

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header"

export const columns: ColumnDef<IPost>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-7">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
  },
  {
    accessorKey: "body",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Body" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="w-[200px] truncate font-medium">
          {row.getValue("body")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "userId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("userId")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]

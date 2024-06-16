import { DataTableColumnHeader } from "@/containers/dentist-management-page/data-table/data-table-column-header"
import { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { IUserDashboard } from "@/types/user.interface"

import { DataTableRowActions } from "./data-table-row-actions"

interface DentistsColumnsProps {
  onDelete: (bankAccount: IUserDashboard) => void
}

export const columns = ({
  onDelete,
}: DentistsColumnsProps): ColumnDef<IUserDashboard>[] => [
  {
    accessorKey: "email",
    header: () => <div className="text-xs text-primary-foreground">Email</div>,
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("firstName")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Last Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("lastName")}</div>,
  },

  {
    accessorKey: "phoneNumber",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
  },
  {
    accessorKey: "dateOfBirth",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date of Birth" />
    ),
    cell: ({ row }) => {
      const dateOfBirth = new Date(row.getValue("dateOfBirth"))
      return <div>{format(dateOfBirth, "dd/MM/yyyy")}</div>
    },
  },
  {
    accessorKey: "address",
    header: () => (
      <div className="text-xs text-primary-foreground">Address</div>
    ),
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "sex",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sex" />
    ),
    cell: ({ row }) => {
      const sex = row.getValue("sex") === 1 ? "Male" : "Female"
      return <div>{sex}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} onDelete={onDelete} />,
  },
]

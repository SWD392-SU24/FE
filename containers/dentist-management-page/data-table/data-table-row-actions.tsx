import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { PenLine, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ConfirmModal } from "@/components/ui/confirm-modal"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { UpdateUser } from "../update-dentist-form"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  onDelete: (value: TData) => void
}

export function DataTableRowActions<TData>({
  row,
  onDelete,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[180px]">
        <Dialog>
          <DialogTrigger>
            <DropdownMenuItem onSelect={(e: any) => e.preventDefault()}>
              <PenLine className="mr-2 h-4 w-4" />
              Update
            </DropdownMenuItem>
          </DialogTrigger>
          <UpdateUser dentist={row.original} />
        </Dialog>
        <ConfirmModal
          onConfirm={() => {
            onDelete(row.original)
          }}
        >
          <DropdownMenuItem onSelect={(e: any) => e.preventDefault()}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

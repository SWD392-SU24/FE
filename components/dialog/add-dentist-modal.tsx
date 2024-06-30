import { Cross2Icon } from "@radix-ui/react-icons"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
}

export default function AddDentistModal({ open, setOpen }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="flex flex-row items-center justify-between">
          <h2 className="text-xl font-semibold">Add Dentist</h2>
          <DialogClose>
            <Cross2Icon className="size-6 text-muted-foreground" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="grid grid-cols-12 border-t py-2"></div>
      </DialogContent>
    </Dialog>
  )
}

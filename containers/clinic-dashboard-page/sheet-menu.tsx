import Image from "next/image"
import Link from "next/link"

import { MenuIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from "@/components/sidebar/menu"

export function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex h-full flex-col px-3 sm:w-72" side="left">
        <SheetHeader>
          <Link
            href="/dashboard"
            className={buttonVariants({
              variant: "link",
              className: "flex items-center justify-center gap-2 pb-2 pt-1",
            })}
          >
            <Image
              src="/logo/logo-full.png"
              alt="logo"
              width={200}
              height={200}
              className="h-10 w-40"
            />
          </Link>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  )
}

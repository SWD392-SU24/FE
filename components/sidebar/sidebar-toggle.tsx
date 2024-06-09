import { ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

interface SidebarToggleProps {
  isOpen: boolean | undefined
  setIsOpen?: () => void
}

export function SidebarToggle({ isOpen, setIsOpen }: SidebarToggleProps) {
  return (
    <div className="invisible absolute -right-[16px] top-[12px] z-20 bg-white dark:bg-primary-foreground lg:visible">
      <Button
        onClick={() => setIsOpen?.()}
        className="size-7 rounded-full"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-700 ease-in-out",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  )
}

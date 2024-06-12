import React from "react"

export default function Footer() {
  return (
    <div className="z-20 w-full border-t bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 flex h-14 items-center md:mx-8">
        <p className="text-left text-xs leading-loose text-muted-foreground md:text-sm">
          © {new Date().getFullYear()} DentiCare. All rights reserved.
        </p>
      </div>
    </div>
  )
}

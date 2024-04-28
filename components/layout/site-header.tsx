import React from "react"

import Link from "next/link"

import { FileIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-2 flex items-center md:mr-6 md:space-x-2">
          <FileIcon className="size-4" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">GG test</span>
        </Link>

        <nav className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="sm">
            <Link aria-label="Sign in" href="/auth/login">
              Sign in
            </Link>
          </Button>
          <Button size="sm">
            <Link aria-label="Register" href="/auth/register">
              Register
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

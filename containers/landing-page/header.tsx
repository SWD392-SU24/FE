import React from "react"

import Link from "next/link"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/">
            <h2 className="z-40 flex font-semibold">DentiCare</h2>
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

"use client"

import Link from "next/link"

import { ChevronDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-20 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-20 items-center justify-between border-b border-zinc-200">
          <div className="flex items-center ">
            <Link href="/">
              <img
                src="/logo/logo.png"
                alt="logo"
                className="pointer-events-none h-[35px] w-full"
              />
            </Link>
            <div className="ml-7 hidden items-center space-x-6 lg:flex">
              {Array.from({ length: 5 }).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="group relative " key={index}>
                  <button
                    type="button"
                    className="flex h-20 items-center py-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
                  >
                    Product
                    <ChevronDown className="ml-1 h-4 w-4 transition group-hover:rotate-180" />
                  </button>
                  <div className="absolute left-0 mt-0 hidden w-44 rounded-md border border-gray-200 bg-white shadow-lg group-focus-within:block group-hover:block">
                    <Link
                      href="/feat1"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Feat 1
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-x-2">
            <Link
              href="/auth/signin"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign in
            </Link>
            <Link
              href="/auth/register"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Register
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

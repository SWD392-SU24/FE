"use client"

import Image from "next/image"
import Link from "next/link"

import { ChevronDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-zinc-200">
          <div className="flex items-center ">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/logo.png"
                alt="logo"
                width={300}
                height={300}
                className="pointer-events-none h-[32px] w-full"
              />
              <span className="ml-1 text-lg font-bold text-primary">
                DentiCare
              </span>
            </Link>
            <div className="ml-10 hidden items-center space-x-6 lg:flex">
              <div className="group relative h-16">
                <button
                  type="button"
                  className="flex h-16 items-center py-2 text-sm font-bold text-primary transition-colors hover:text-primary/75"
                >
                  Product
                  <ChevronDown className="ml-1 h-4 w-4 transition group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-0 hidden w-44 rounded-md border border-gray-200 bg-white shadow-md group-focus-within:block group-hover:block">
                  <Link
                    href="/feat1"
                    className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary"
                  >
                    Feat 1
                  </Link>
                </div>
              </div>
              <Link
                href="/aboutus"
                className="text-sm font-semibold text-primary hover:text-primary/75"
              >
                About Us
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-semibold text-primary hover:text-primary/75"
              >
                FAQ
              </Link>
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

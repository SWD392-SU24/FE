import React from "react"

import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

import MaxWidthWrapper from "@/components/max-width-wrapper"

import { MainHeader } from "./main-header"

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link className="mr-8" href="/">
            {/* <h2 className="z-40 flex font-semibold">DentiCare</h2> */}
            <Image
              src="/asset/Logo_Primblack.png"
              width={150}
              height={150}
              className="z-40 flex"
              alt="Logo_Primblack"
            />
          </Link>
          <MainHeader />
        </div>
        <div className="flex space-x-2 ">
          <Link
            className={buttonVariants({
              size: "sm",
              variant: "outline",
            })}
            href="/auth/signin"
          >
            Sign In
          </Link>
          <Link
            className={buttonVariants({
              size: "sm",
              variant: "default",
            })}
            href="/auth/register"
          >
            Register
          </Link>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

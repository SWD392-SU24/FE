import React from "react"

import Image from "next/image"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="ld:w-full flex w-[600px] flex-col items-start p-6">
        <Link href="/">
          <Image
            src="/logo/logo-full.png"
            alt="LOGO"
            sizes="100vw"
            style={{
              width: "25%",
              height: "auto",
            }}
            width={0}
            height={0}
          />
        </Link>
        {children}
      </div>
      <div className="max-w-4000px relative hidden max-h-full w-full flex-1 flex-col gap-3 overflow-hidden bg-cream pl-24 pt-10 lg:flex">
        <h2 className="font-bold text-gravel md:text-4xl">
          Hi, Welcome to <span className="text-primary">DentiCare</span>
        </h2>
        <p className="mb-10 text-iridium md:text-sm">
          Discover DentiCare, the revolutionary platform that seamlessly
          connects customers with dental clinics across Vietnam.
          <br />
          <span>Experience a new era of dental care like never before 😉</span>
        </p>

        <Image
          src="/assets/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute top-48 !w-[1600px] shrink-0 rounded-2xl"
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

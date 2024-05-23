/* eslint-disable no-use-before-define */
import React from "react"

import Link from "next/link"

import { ChevronRight } from "lucide-react"

import { FOOTER_COMPANY_INFO } from "@/lib/constants/footer"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Footer() {
  return (
    <footer className="h-full bg-[#202942] pt-10 text-white">
      <MaxWidthWrapper className="mb-10 grid grid-cols-12 gap-10">
        <div className="col-span-4 flex flex-col items-start justify-start">
          <Link href="/" className="flex items-center gap-x-2 ">
            <img src="/logo/logo-bg-white.png" alt="logo" className="size-7" />
            <span className="text-lg font-semibold">DentiCare</span>
          </Link>
          <p className="mt-4 text-xs text-[#adb5bd]">
            DentiCare is a platform connecting customers with private dental
            clinics in Vietnam. Its mission is to simplify the dental care
            experience, offering comprehensive solutions that prioritize
            long-term health and customer satisfaction.
          </p>
        </div>

        <div className="col-span-2">
          <FooterColumn title="Company">
            <ul className="text-foreground-footer space-y-2 text-sm">
              {FOOTER_COMPANY_INFO.links.map((item) => (
                <li
                  key={item.label}
                  className="hover:text-foreground-footer-hover flex items-center hover:translate-x-1"
                >
                  <ChevronRight className="mr-2 size-4" />
                  {item.label}
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
        <div className="col-span-2">2</div>
        <div className="col-span-3">3</div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex items-center justify-between border-t border-white/10">
          <div className="text-foreground-footer  py-4 text-sm">
            <p>© {new Date().getFullYear()} DentiCare. All rights reserved.</p>
          </div>
          <div className="">1</div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className=" whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

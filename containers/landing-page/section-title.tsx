import React from "react"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function SectionTitle() {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
        <div className="container mx-auto mt-20 px-4">
          <div className="mb-12 text-center">
            <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-primary">
              Departments
            </span>
            <h4 className="mb-4 text-xl font-semibold">Our Medical Services</h4>
            <p className="mx-auto max-w-2xl text-gray-600">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment, or a simple
              consultation.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

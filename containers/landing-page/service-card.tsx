import React from "react"

import { ArrowRight } from "lucide-react"

import { ICON_SERVICE } from "@/lib/constants/icon-service"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function ServiceCard() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
      <div className="container mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ICON_SERVICE.links.map((service) => (
            <div
              className="card features feature-primary m-2 rounded border-0 p-4"
              key={service.label}
            >
              <div className="mb-4 flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-none border-primary bg-blue-50 text-primary">
                  <service.icon className="text-3xl" />
                </div>
              </div>
              <div className="card-body text-left">
                <a
                  href=""
                  className="title text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  {service.label}
                </a>
                <p className="mt-3 text-gray-400">{service.description}</p>
                <a href="" className="mt-2 flex items-center text-primary">
                  Read More <ArrowRight className="ml-1 size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

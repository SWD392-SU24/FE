"use client"

import { useEffect, useState } from "react"

import { ICON_SERVICE } from "@/lib/constants/icon-service"

import useMediaQuery from "@/hooks/use-media-query"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import ServiceCard from "@/components/service-card"
import TitleSection from "@/components/title-section"

export default function ServiceCardSection() {
  const { device } = useMediaQuery()
  const [position, setPosition] = useState<"left" | "center">("left")

  useEffect(() => {
    if (device === "mobile") {
      setPosition("center")
    } else {
      setPosition("left")
    }
  }, [position, setPosition, device])
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <div>
        <TitleSection
          label="Departments"
          title="Our Medical Services"
          description="Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment, or a simple
              consultation."
        />
      </div>
      <div className="container mx-auto mb-16 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ICON_SERVICE.links.map((service) => (
            <ServiceCard
              title={service.label}
              description={service.description}
              key={service.label}
              icon={service.icon}
              position={position}
              href="/"
            />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

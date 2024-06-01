import { ICON_SERVICE_FAQ } from "@/lib/constants/icon-service"

import MaxWidthWrapper from "@/components/max-width-wrapper"
import ServiceCard from "@/components/service-card"

export default function ServiceCardFaq() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h4 className="text-2xl font-bold">
            Choose a category to quickly find
          </h4>
          <p className="text-gray-500">
            Great doctor if you need your family member to get effective
            immediate assistance, emergency treatment, or a simple consultation.
          </p>
        </div>
        <div className="container mx-auto mb-16 px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ICON_SERVICE_FAQ.links.map((service) => (
              <ServiceCard
                key={service.label}
                href="/"
                description={service.description}
                icon={service.icon}
                title={service.label}
                position="center"
              />
            ))}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

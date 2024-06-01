import { ICON_SERVICE_CONTACT } from "@/lib/constants/icon-service"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function ContactCardFaq() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
      <section className="py-12">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h4 className="text-2xl font-bold">Still have a question?</h4>
            <p className="text-gray-500">
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment, or a simple
              consultation.
            </p>
          </div>

          <div className="container mx-auto mb-16 px-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {ICON_SERVICE_CONTACT.links.map((service) => (
                <div
                  className="card features feature-primary m-2 rounded border-0 p-4"
                  key={service.label}
                >
                  <div className="card features rounded-lg bg-white p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border-2 border-none bg-blue-50 text-blue-600">
                      <service.icon className="text-3xl" />
                    </div>
                    <div className="card-body mt-4">
                      <p className="text-lg font-medium text-gray-700 hover:text-blue-600">
                        {service.label}
                      </p>
                      <p className="mt-3 text-gray-600">
                        {service.description}
                      </p>
                      <p className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                        {service.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}

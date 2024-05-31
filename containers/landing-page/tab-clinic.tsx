import React from "react"

import { ArrowRight } from "lucide-react"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function TabClinic() {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl">
              <div className="flex flex-col overflow-hidden rounded bg-white shadow md:flex-row md:space-x-4">
                <div className="flex-1 bg-gray-100 p-4">
                  <h5 className="mt-1 text-lg font-semibold">
                    Emergency Cases
                  </h5>
                  <p className="mt-2 text-gray-600">
                    This is required when, for example, the information is not
                    yet available. Dummy text is also known.
                  </p>
                  <a href="/" className="mt-2 flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 size-4" />
                  </a>
                </div>

                <div className="flex-1 p-4">
                  <h5 className="mt-1 text-lg font-semibold">
                    Doctors Timetable
                  </h5>
                  <p className="mt-2 text-gray-600">
                    This is required when, for example, the information is not
                    yet available. Dummy text is also known as.
                  </p>
                  <a href="/" className="mt-2 flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 size-4" />
                  </a>
                </div>

                <div className="flex-1 bg-gray-100 p-4">
                  <h5 className="mt-1 text-lg font-semibold">Opening Hours</h5>
                  <ul className="mt-2 space-y-2">
                    <li className="flex justify-between text-gray-600">
                      <span>Monday - Friday</span>
                      <span className="text-primary">8.00 - 20.00</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                      <span>Saturday</span>
                      <span className="text-primary">8.00 - 18.00</span>
                    </li>
                    <li className="flex justify-between text-gray-600">
                      <span>Sunday</span>
                      <span className="text-primary">8.00 - 14.00</span>
                    </li>
                  </ul>
                  <a href="/" className="mt-2 flex items-center text-primary">
                    Read More <ArrowRight className="ml-1 size-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

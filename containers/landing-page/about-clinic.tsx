import React from "react"

import Image from "next/image"

import { ArrowRight } from "lucide-react"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function AboutClinic() {
  return (
    <div>
      <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
        <div className="container mx-auto mb-16 mt-20 px-4">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="relative mb-8 lg:mb-0 lg:w-1/2">
              <Image
                src="/assets/about-2.png"
                className="rounded-lg"
                alt="About Our Treatments"
                width={450}
                height={450}
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="section-title">
                <h4 className="mb-4 text-2xl font-semibold">
                  About Our Treatments
                </h4>
                <p className="text-gray-600">
                  Great doctor if you need your family member to get effective
                  immediate assistance, examination, emergency treatment, or a
                  simple consultation. Thank you.
                </p>
                <p className="mt-4 text-gray-600">
                  The most well-known dummy text is the 'Lorem Ipsum', which is
                  said to have originated in the 16th century. Lorem Ipsum is
                  composed in a pseudo-Latin language which more or less
                  corresponds to 'proper' Latin. It contains a series of real
                  Latin words.
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="hover:bg-primary-dark inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-white"
                >
                  Read More <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

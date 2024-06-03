import React from "react"

import Image from "next/image"

import { CheckIcon } from "lucide-react"

export default function AboutUsStory() {
  return (
    <div>
      <section id="about" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-primary">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MuhReezky Soft was founded in 2015 with the mission of
                  providing innovative software solutions to businesses of all
                  sizes. Our team of experienced developers and designers are
                  dedicated to creating cutting-edge technology that helps our
                  clients succeed.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To empower businesses with technology that drives growth and
                  innovation.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Values</h3>
                <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Integrity: We are committed to honesty, transparency, and
                    ethical practices.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Innovation: We constantly strive to push the boundaries of
                    what is possible with technology.
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Customer Focus: We put the needs of our clients at the
                    forefront of everything we do.
                  </li>
                </ul>
              </div>
            </div>
            <Image
              src="/assets/about.jpg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

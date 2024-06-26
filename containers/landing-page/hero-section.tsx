/* eslint-disable @next/next/no-img-element */

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"

import Image from "next/image"

import { Check, Star } from "lucide-react"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function HeroSection() {
  return (
    <section className="bg-slate-50">
      <MaxWidthWrapper className="xl:pt-30 pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="absolute -top-10 left-0 hidden w-full lg:block">
              <span className="rounded-sm bg-blue-50 px-2 py-1.5 text-sm font-semibold uppercase tracking-tight text-primary">
                We care about your smile
              </span>
            </div>
            <h1 className="relative mt-0 w-fit text-balance text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Click to <span className="text-primary">Confident Smile</span>
            </h1>
            <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
              DentiCare is a platform connecting customers with private dental
              clinics in Vietnam. Aiming to simplify dental care, it offers
              comprehensive solutions focused on long-term health and customer
              satisfaction.
            </p>

            <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
              <div className="space-y-2">
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  Efficient dentist management
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  Seamless booking system
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  Real-time analytics and reporting
                </li>
                <li className="flex items-center gap-1.5 text-left">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  24/7 customer support
                </li>
              </div>
            </ul>

            <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="flex -space-x-4">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-1.png"
                  alt="user image"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-2.png"
                  alt="user image"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-3.png"
                  alt="user image"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  src="/users/user-4.jpg"
                  alt="user image"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-slate-100"
                  src="/users/user-5.jpg"
                  alt="user image"
                />
              </div>

              <div className="flex flex-col items-center justify-between sm:items-start">
                <div className="flex gap-0.5">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <Star className="h-4 w-4 fill-primary text-primary" />
                </div>

                <p>
                  <span className="font-semibold">1.250</span> happy customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
          <div className="relative md:max-w-xl">
            <Image
              width={400}
              height={400}
              src="/assets/about-2.png"
              alt="hero"
              className="pointer-events-none"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

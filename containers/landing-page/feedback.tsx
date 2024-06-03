import React from "react"

import Image from "next/image"

import { Check, Star } from "lucide-react"

import MaxWidthWrapper from "@/components/max-width-wrapper"

export default function Feedback() {
  return (
    <section className="mb-2 bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16  sm:gap-32">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
          <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
            What our <span className="relative px-2 ">customers </span> say
          </h2>
          <Image
            src="/logo/logo.png"
            alt="img"
            width={300}
            height={300}
            className="order-0 w-16 lg:order-2"
          />
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <Star className="size-5 fill-blue-600 text-blue-600" />
              <Star className="size-5 fill-blue-600 text-blue-600" />
              <Star className="size-5 fill-blue-600 text-blue-600" />
              <Star className="size-5 fill-blue-600 text-blue-600" />
              <Star className="size-5 fill-blue-600 text-blue-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                &quot;The case feels durable and I even got a compliment on the
                design. Had the case for two and a half months now and{" "}
                <span className="bg-blue-800 p-0.5 text-white">
                  the image is super clear
                </span>
                , on the case I had before, the image started fading into
                yellow-ish color after a couple weeks. Love it.&quot;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                className="h-12 w-12 rounded-full object-cover"
                width={300}
                height={300}
                src="/assets/user-3.png"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Lily</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-blue-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
          {/* 2 reviews */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="mb-2 flex gap-0.5">
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
              <Star className="h-5 w-5 fill-blue-600 text-blue-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                &quot;I usually keep my phone together with my keys in my pocket
                and that led to some pretty heavy stretchmarks on all of my last
                phone cases. This one, besides a barely noticeable scratch on
                the corner,{" "}
                <span className="bg-blue-800 p-0.5 text-white">
                  looks brand new after about half a year
                </span>
                . I dig it.&quot;
              </p>
            </div>
            <div className="mt-2 flex gap-4">
              <Image
                className="h-12 w-12 rounded-full object-cover"
                width={300}
                height={300}
                src="/assets/user-4.jpg"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Josh</p>
                <div className="flex items-center gap-1.5 text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-blue-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

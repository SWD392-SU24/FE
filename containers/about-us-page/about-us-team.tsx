import React from "react"

import Image from "next/image"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AboutUsTeam() {
  return (
    <div>
      <section id="team" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-primary">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the DentiCare Soft Team
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented team of developers, designers, and project managers
              are dedicated to delivering exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar>
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  width={400}
                  height={400}
                  src="/assets/user-3.png"
                  alt="user"
                />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-lg font-semibold">Long Vu</h4>
                <p className="text-gray-500 dark:text-gray-400">CEO, Founder</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar>
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  width={400}
                  height={400}
                  src="/assets/user-3.png"
                  alt="user"
                />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-lg font-semibold">Vu Minh Nhat</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  CTO, Co-Founder
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Avatar>
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  width={400}
                  height={400}
                  src="/assets/user-3.png"
                  alt="user"
                />
                <AvatarFallback>OH</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h4 className="text-lg font-semibold">Phung Tran Mai Ha</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  QA&QC Manager, Co-Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

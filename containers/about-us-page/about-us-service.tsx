import React from "react"

export default function AboutUsService() {
  return (
    <div>
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-primary">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MuhReezky Soft provides a wide range of software development
                services to help businesses of all sizes achieve their goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Web Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We build custom, responsive websites and web applications that
                are tailored to your business needs.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Mobile App Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of experienced mobile app developers create
                high-performing, user-friendly apps for iOS and Android.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Software Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We integrate your existing software systems and databases to
                create a seamless, efficient workflow.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">IT Consulting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our IT consultants provide expert guidance and strategic
                recommendations to help you achieve your technology goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

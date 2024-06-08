import React from "react"

interface Props {
  label: string
  title: string
  description: string
}

export default function TitleSection({ label, title, description }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm text-primary">
            {label}
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[900px] text-pretty tracking-tight text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

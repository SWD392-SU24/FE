import React from "react"

import Link from "next/link"

import { ArrowRight, LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type ServiceCardProps = {
  title: string
  href: string
  description: string
  icon: LucideIcon
  position: "left" | "center"
}

export default function ServiceCard({
  title,
  href,
  description,
  icon: Icon,
  position = "center",
}: ServiceCardProps) {
  return (
    <div className="card features feature-primary m-2 rounded border-0 p-4">
      <div
        className={cn(
          "card features rounded-lg bg-white p-6 text-center",
          position === "left" && "text-left"
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-12 w-12 items-center justify-center rounded-md border-2 border-none bg-blue-50 text-blue-600",
            position === "left" && "mx-0"
          )}
        >
          <Icon className="text-3xl" />
        </div>
        <div className="card-body mt-4">
          <Link
            href={href}
            className="text-lg font-medium text-gray-700 hover:text-blue-600"
          >
            {title}
          </Link>
          <p className="mt-3 text-pretty text-gray-600">{description}</p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

import React from "react"

import { cn } from "@/lib/utils"

interface ClinicDashboardWrapperProps {
  children: React.ReactNode
  className?: string
  title: string
}

export default function ClinicDashboardWrapper({
  children,
  className,
  title,
}: ClinicDashboardWrapperProps) {
  return (
    <div className={cn("h-full w-full px-4 py-6 md:px-10", className)}>
      <h1 className="mb-6 text-2xl font-semibold text-gray-800">{title}</h1>
      {children}
    </div>
  )
}

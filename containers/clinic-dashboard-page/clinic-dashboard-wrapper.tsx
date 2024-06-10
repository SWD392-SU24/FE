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
    <div className={cn("h-full w-full px-2.5 py-4 md:px-10", className)}>
      <h1 className="text-xl font-semibold">{title}</h1>
      {children}
    </div>
  )
}

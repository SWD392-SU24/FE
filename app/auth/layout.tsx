import React from "react"

import { Shell } from "@/components/ui/shell"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Shell variant="centered">{children}</Shell>
}

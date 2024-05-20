import React from "react"

import Header from "@/containers/landing-page/header"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

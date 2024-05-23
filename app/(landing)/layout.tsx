import React from "react"

import Footer from "@/containers/landing-page/footer"
import Header from "@/containers/landing-page/header"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  )
}

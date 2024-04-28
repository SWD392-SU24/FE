import React from "react"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"

import { cn } from "@/lib/utils"

import SiteHeader from "@/components/layout/site-header"
import ThemeProvider from "@/components/themes/theme-provider"
import { ReactQueryClientProvider } from "@/components/tools/react-query-client-provider"
import TailwindIndicator from "@/components/tools/tailwind-indicator"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <ReactQueryClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster richColors />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}

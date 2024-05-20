import React from "react"

import { Inter } from "next/font/google"

import { Toaster } from "sonner"

import { constructMetadata } from "@/config/site"

import ThemeProvider from "@/components/themes/theme-provider"
import { ReactQueryClientProvider } from "@/components/tools/react-query-client-provider"
import TailwindIndicator from "@/components/tools/tailwind-indicator"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster richColors />
            <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
              <div className="flex h-full flex-1 flex-col">{children}</div>
            </main>
            <TailwindIndicator />
          </ThemeProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}

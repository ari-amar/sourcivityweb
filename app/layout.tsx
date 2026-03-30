import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL('https://sourcivity.io'),
  title: "sourcivity.io - AI-Powered Supplier Search & RFQ Automation",
  description:
    "The first AI-powered platform that aggregates supplier catalogs, automates RFQs, and connects you directly with US-based manufacturers and distributors.",
  keywords: ["sourcivity", "supplier search", "AI parts search", "RFQ automation", "manufacturer search", "distributor search", "parts sourcing"],
  icons: {
    icon: '/sourcivity-logo.png',
    apple: '/sourcivity-logo.png',
  },
  openGraph: {
    title: "sourcivity.io - AI-Powered Supplier Search",
    description: "AI-powered platform that aggregates supplier catalogs, automates RFQs, and connects you with US-based manufacturers.",
    url: 'https://sourcivity.io',
    siteName: 'Sourcivity',
    type: 'website',
    images: [{ url: '/sourcivity-logo.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "sourcivity.io - AI-Powered Supplier Search",
    description: "AI-powered platform that aggregates supplier catalogs, automates RFQs, and connects you with US-based manufacturers.",
    images: ['/sourcivity-logo.png'],
  },
  generator: "sourcivity.io",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}

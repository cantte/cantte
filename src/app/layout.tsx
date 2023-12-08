import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: 'cantte',
  description: 'Small software development company',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}

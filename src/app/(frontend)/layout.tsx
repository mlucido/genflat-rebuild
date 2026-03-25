import type { Metadata } from 'next'
import { darwinPro, roboto } from '@/lib/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenFlat — Maximizing Efficiency. Minimizing Footprint.',
  description: 'GenFlat Holdings, Inc. — Revolutionary collapsible shipping container technology.',
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${darwinPro.variable} ${roboto.variable}`}>
      <body className="bg-white text-[#373C48] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

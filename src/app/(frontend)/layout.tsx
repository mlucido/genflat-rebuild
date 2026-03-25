import type { Metadata } from 'next'
import { montserrat, inter } from '@/lib/fonts'
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
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-[#0d0d0d] text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

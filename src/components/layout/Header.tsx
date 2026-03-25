import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'

export default async function Header() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const navLinks: Array<{ label: string; href: string }> = (settings.nav as any) || [
    { label: 'About', href: '#about' },
    { label: 'The Process', href: '#process' },
    { label: 'Why GenFlat', href: '#whygenflat' },
    { label: 'Specs', href: '#specs' },
    { label: 'News', href: '/news' },
    { label: 'Investor Information', href: '/investor-information' },
  ]

  const logo = typeof settings.logo === 'object' && settings.logo

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#373C48]/95 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          {logo && logo.url ? (
            <img src={logo.url} alt="GenFlat" className="h-10 w-auto" />
          ) : (
            <span className="text-2xl font-black font-[family-name:var(--font-darwin)] tracking-tight">
              GEN<span className="text-[#F07922]">FLAT</span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#F07922] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="bg-[#F07922] text-black text-sm font-bold px-5 py-2.5 rounded hover:bg-[#d96a1a] transition-colors uppercase tracking-wider"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu button - handled by client component if needed */}
        <button className="md:hidden text-white" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

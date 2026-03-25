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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-[1400px] mx-auto px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {logo && logo.url ? (
            <img src={logo.url} alt="GenFlat" className="h-14 w-auto" />
          ) : (
            <div className="flex items-center gap-2">
              <img src="/media/genflat-ico.png" alt="" className="h-12 w-auto" />
              <div className="leading-tight">
                <span className="text-xl font-bold text-[#585F71]">Gen</span>
                <span className="text-xl font-bold text-[#F07922]">Flat</span>
                <div className="text-[10px] text-[#585F71] tracking-wide">Holdings, Inc.</div>
              </div>
            </div>
          )}
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link: any, i: number) => (
            <li key={i}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#585F71] hover:text-[#F07922] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="border-2 border-[#F07922] text-[#F07922] text-sm font-bold px-6 py-2.5 rounded-sm hover:bg-[#F07922] hover:text-white transition-all uppercase tracking-wider inline-flex items-center gap-2"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        </ul>

        <button className="lg:hidden text-[#585F71]" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

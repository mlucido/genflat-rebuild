import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'

export default async function Footer() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const footer: any = settings.footer || {}
  const navLinks: Array<{ label: string; href: string }> = (settings.nav as any) || []

  return (
    <footer className="relative bg-[#2a2e38] text-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/media/shipping-port.jpg)' }}
      />
      <div className="relative z-10">
        {/* Nav links row */}
        <div className="border-b border-white/10 py-6">
          <div className="max-w-[1400px] mx-auto px-8">
            <ul className="flex flex-wrap justify-center gap-8">
              {navLinks.map((link: any, i: number) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#F07922] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-[1400px] mx-auto px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/media/genflat-ico.png" alt="" className="h-10 w-auto brightness-0 invert" />
                <div className="leading-tight">
                  <span className="text-lg font-bold text-gray-300">Gen</span>
                  <span className="text-lg font-bold text-[#F07922]">Flat</span>
                  <div className="text-[9px] text-gray-400 tracking-wide">Holdings, Inc.</div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Contact</h3>
              {footer.email && (
                <a href={`mailto:${footer.email}`} className="block text-sm text-gray-300 hover:text-white transition-colors">
                  {footer.email}
                </a>
              )}
              {footer.address && (
                <p className="text-sm text-gray-400 mt-1">{footer.address}</p>
              )}
            </div>

            {/* Social */}
            <div className="text-right">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Follow Us Online</h3>
              <div className="flex justify-end gap-4">
                {footer.socialLinks?.map((social: any, i: number) => (
                  <a
                    key={i}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#F07922] transition-colors"
                    aria-label={social.platform}
                  >
                    {social.platform === 'LinkedIn' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    ) : (
                      <span className="text-sm">{social.platform}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-4 text-center">
          <p className="text-xs text-gray-500">
            {footer.copyright || 'GenFlat Holdings, Inc. © 2023'}
          </p>
        </div>
      </div>
    </footer>
  )
}

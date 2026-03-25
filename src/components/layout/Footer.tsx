import Link from 'next/link'
import { getPayloadClient } from '@/lib/payload'

export default async function Footer() {
  const payload = await getPayloadClient()
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const footer: any = settings.footer || {}

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-black font-[family-name:var(--font-heading)] tracking-tight">
              GEN<span className="text-[#c8a84b]">FLAT</span>
            </span>
            <p className="text-gray-500 text-sm mt-3">
              Maximizing efficiency. Minimizing footprint.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#c8a84b] mb-3">Contact</h3>
            {footer.email && (
              <a href={`mailto:${footer.email}`} className="block text-gray-400 text-sm hover:text-white transition-colors">
                {footer.email}
              </a>
            )}
            {footer.address && (
              <p className="text-gray-500 text-sm mt-2">{footer.address}</p>
            )}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#c8a84b] mb-3">Follow Us</h3>
            <div className="flex gap-4">
              {footer.socialLinks?.map((social: any, i: number) => (
                <a
                  key={i}
                  href={social.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c8a84b] transition-colors text-sm"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-600 text-xs">
          {footer.copyright || 'GenFlat Holdings, Inc. © 2024'}
        </div>
      </div>
    </footer>
  )
}

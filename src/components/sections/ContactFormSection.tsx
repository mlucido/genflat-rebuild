'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/submitContact'

export default function ContactFormSection({ data }: { data: any }) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const result = await submitContact(formData)
    if (result.success) setSubmitted(true)
    setLoading(false)
  }

  const inputClass = "w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-[#373C48] placeholder-gray-400 focus:border-[#F07922] focus:outline-none transition-colors text-sm"
  const selectClass = "w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-[#373C48] focus:border-[#F07922] focus:outline-none transition-colors text-sm"

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#373C48]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/media/shipping-port.jpg)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-darwin)] text-2xl md:text-3xl font-normal text-white mb-3">
            {data?.heading || 'Learn More about GenFlat'}
          </h2>
          {data?.subheading && (
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#F07922]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#F07922]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank you!</h3>
            <p className="text-gray-400">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1: Name, Email, Phone, Company */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input type="text" name="name" required placeholder="Name" className={inputClass} />
              <input type="email" name="email" required placeholder="Email" className={inputClass} />
              <input type="tel" name="phone" placeholder="Phone" className={inputClass} />
              <input type="text" name="company" placeholder="Company Name" className={inputClass} />
            </div>

            {/* Row 2: Business Type, Job Function */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select name="businessType" className={selectClass}>
                <option value="">Which of the following best describes your primary business?</option>
                <option value="distribution">Distribution/Warehouse</option>
                <option value="freight">Freight Forwarder</option>
                <option value="heavyhaul">Heavy Haul Trucking</option>
                <option value="intermodal">Intermodal Rail Terminal</option>
                <option value="leasing">Leasing Company</option>
                <option value="logistics">Logistics Transportation</option>
                <option value="marine">Marine Terminal Operator</option>
                <option value="media">Media</option>
                <option value="nvocc">Non-Vessel Operating Common Carrier (NVOCC)</option>
                <option value="ocean">Ocean Carrier</option>
                <option value="port">Port Authority</option>
                <option value="railroad">Railroad/ Rail Transportation</option>
                <option value="thirdparty">Third Party Distribution Center/Warehouse</option>
                <option value="trucking">Trucking</option>
                <option value="union">Union/Labor</option>
                <option value="other">Other</option>
              </select>
              <select name="jobFunction" className={selectClass}>
                <option value="">Which of the following best describes your job function?</option>
                <option value="corporate">Corporate Management, CEO, Vice President</option>
                <option value="distribution">Distribution management</option>
                <option value="economic">Economic Forecasting/Strategy</option>
                <option value="engineering">Engineering</option>
                <option value="general">General Management</option>
                <option value="government">Government Official/Compliance</option>
                <option value="logistics">Logistics</option>
                <option value="operations">Operations/Plant/General management</option>
                <option value="port">Port Management (Port Authority Marine Terminal)</option>
                <option value="procurement">Procurement/Purchasing</option>
                <option value="sales">Sales/Marketing/Business Development</option>
                <option value="supplychain">Supply Chain Executive</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Row 3: Interest textarea */}
            <textarea
              name="interest"
              rows={3}
              placeholder="Please briefly describe the nature of your interest in GenFlat"
              className={inputClass + " resize-none"}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F07922] text-white font-bold py-4 rounded-sm text-base hover:bg-[#d96a1a] transition-colors uppercase tracking-wider disabled:opacity-50"
            >
              {loading ? 'Sending...' : (data?.submitButtonText || 'CONTACT US')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

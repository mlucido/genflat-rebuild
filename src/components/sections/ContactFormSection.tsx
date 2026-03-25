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
    if (result.success) {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#373C48]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {data?.heading || 'Learn More about GenFlat'}
          </h2>
          {data?.subheading && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </div>

        {submitted ? (
          <div className="bg-[#2a2e38] rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-[#F07922]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#F07922]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank you!</h3>
            <p className="text-gray-400">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#2a2e38] rounded-lg p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#F07922] focus:outline-none transition-colors"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#F07922] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#F07922] focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#F07922] focus:outline-none transition-colors"
                  placeholder="Acme Shipping Co."
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-400 mb-2">
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white focus:border-[#F07922] focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Distribution/Warehouse">Distribution/Warehouse</option>
                  <option value="Freight Forwarder">Freight Forwarder</option>
                  <option value="Heavy Haul Trucking">Heavy Haul Trucking</option>
                  <option value="Intermodal Rail Terminal">Intermodal Rail Terminal</option>
                  <option value="Leasing Company">Leasing Company</option>
                  <option value="Logistics Transportation">Logistics Transportation</option>
                  <option value="Marine Terminal Operator">Marine Terminal Operator</option>
                  <option value="Media">Media</option>
                  <option value="NVOCC">NVOCC</option>
                  <option value="Ocean Carrier">Ocean Carrier</option>
                  <option value="Port Authority">Port Authority</option>
                  <option value="Railroad">Railroad</option>
                  <option value="Third Party Distribution">Third Party Distribution</option>
                  <option value="Trucking">Trucking</option>
                  <option value="Union/Labor">Union/Labor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="jobFunction" className="block text-sm font-medium text-gray-400 mb-2">
                  Job Function
                </label>
                <select
                  id="jobFunction"
                  name="jobFunction"
                  className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white focus:border-[#F07922] focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="Corporate Management CEO VP">Corporate Management CEO VP</option>
                  <option value="Distribution management">Distribution management</option>
                  <option value="Economic Forecasting/Strategy">Economic Forecasting/Strategy</option>
                  <option value="Engineering">Engineering</option>
                  <option value="General Management">General Management</option>
                  <option value="Government Official/Compliance">Government Official/Compliance</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Operations/Plant/General management">Operations/Plant/General management</option>
                  <option value="Port Management">Port Management</option>
                  <option value="Procurement/Purchasing">Procurement/Purchasing</option>
                  <option value="Sales/Marketing/Business Development">Sales/Marketing/Business Development</option>
                  <option value="Supply Chain Executive">Supply Chain Executive</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-400 mb-2">
                How can we help?
              </label>
              <textarea
                id="interest"
                name="interest"
                rows={4}
                className="w-full bg-[#373C48] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#F07922] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your interest in GenFlat..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#F07922] text-black font-bold py-4 rounded text-lg hover:bg-[#d96a1a] transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : (data?.submitButtonText || 'CONTACT US')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

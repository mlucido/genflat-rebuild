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
    <section id="contact" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            {data?.heading || 'Learn More about GenFlat'}
          </h2>
          {data?.subheading && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </div>

        {submitted ? (
          <div className="bg-[#1a1a1a] rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-[#c8a84b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#c8a84b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Thank you!</h3>
            <p className="text-gray-400">We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#1a1a1a] rounded-lg p-8 md:p-12 space-y-6">
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
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors"
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
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors"
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
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors"
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
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors"
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
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white focus:border-[#c8a84b] focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="shipping">Shipping Line</option>
                  <option value="logistics">Logistics Provider</option>
                  <option value="freight">Freight Forwarder</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="investor">Investor</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="jobFunction" className="block text-sm font-medium text-gray-400 mb-2">
                  Job Function
                </label>
                <input
                  type="text"
                  id="jobFunction"
                  name="jobFunction"
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors"
                  placeholder="VP Operations"
                />
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
                className="w-full bg-[#0d0d0d] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-[#c8a84b] focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your interest in GenFlat..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c8a84b] text-black font-bold py-4 rounded text-lg hover:bg-[#d4b85c] transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : (data?.submitButtonText || 'CONTACT US')}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

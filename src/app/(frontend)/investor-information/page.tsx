import { getPayloadClient } from '@/lib/payload'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Investor Information — GenFlat',
  description: 'GenFlat Holdings, Inc. investor information and SEC filings.',
}

export default async function InvestorPage() {
  const payload = await getPayloadClient()
  const data = await payload.findGlobal({ slug: 'investor-page' })

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-[family-name:var(--font-darwin)] text-4xl md:text-5xl font-black mb-8 text-center text-[#373C48]">
          {data.heading || 'INVESTOR INFORMATION'}
        </h1>
        <div className="bg-[#f5f5f5] rounded-lg p-8 md:p-12 space-y-6">
          <p className="text-xl font-semibold text-[#373C48]">{data.companyName}</p>
          {data.address && <p className="text-gray-600 whitespace-pre-line">{data.address}</p>}
          {data.secCikNumber && (
            <p className="text-gray-600">
              SEC CIK Number:{' '}
              <a
                href={`https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${data.secCikNumber}&type=&dateb=&owner=include&count=40`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F07922] hover:text-[#d96a1a] underline"
              >
                {data.secCikNumber}
              </a>
            </p>
          )}
          {data.codeOfConductPdf && typeof data.codeOfConductPdf === 'object' && data.codeOfConductPdf.url && (
            <a
              href={data.codeOfConductPdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F07922] text-white font-bold px-6 py-3 rounded hover:bg-[#d96a1a] transition-colors"
            >
              Download Code of Conduct
            </a>
          )}
        </div>
      </div>
    </main>
  )
}

import type { GlobalConfig } from 'payload'

export const InvestorPage: GlobalConfig = {
  slug: 'investor-page',
  label: 'Investor Information Page',
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'INVESTOR INFORMATION' },
    { name: 'companyName', type: 'text', defaultValue: 'GenFlat Holdings, Inc.' },
    { name: 'address', type: 'textarea' },
    { name: 'secCikNumber', type: 'text', defaultValue: '1796949' },
    { name: 'importantNotice', type: 'richText' },
    { name: 'codeOfConductPdf', type: 'upload', relationTo: 'media' },
  ],
}

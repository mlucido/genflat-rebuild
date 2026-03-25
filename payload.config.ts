import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import { Media } from './src/collections/Media'
import { NewsArticles } from './src/collections/NewsArticles'
import { SiteSettings } from './src/globals/SiteSettings'
import { HomePage } from './src/globals/HomePage'
import { InvestorPage } from './src/globals/InvestorPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— GenFlat Admin',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Media,
    NewsArticles,
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
  ],
  globals: [SiteSettings, HomePage, InvestorPage],
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./genflat.db' },
  }),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'CHANGE_THIS_SECRET',
  typescript: { outputFile: path.resolve(dirname, 'src/payload-types.ts') },
})

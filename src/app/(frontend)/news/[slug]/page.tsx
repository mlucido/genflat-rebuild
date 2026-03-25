import { getPayloadClient } from '@/lib/payload'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const revalidate = 60

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'news-articles',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })
  const article = docs[0]
  if (!article) return { title: 'Not Found' }
  return { title: `${article.title} — GenFlat News`, description: article.excerpt || '' }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'news-articles',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  })

  const article = docs[0]
  if (!article) notFound()

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-6">
        <time className="text-sm text-[#F07922]">
          {new Date(article.publishedDate).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </time>
        <h1 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl font-black mt-2 mb-8">
          {article.title}
        </h1>
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Rich text rendering - will need Payload's lexical serializer */}
          {article.excerpt && <p className="text-gray-300 text-lg">{article.excerpt}</p>}
        </div>
      </article>
    </main>
  )
}

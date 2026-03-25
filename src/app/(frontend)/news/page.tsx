import { getPayloadClient } from '@/lib/payload'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'News — GenFlat',
  description: 'Latest news and updates from GenFlat Holdings, Inc.',
}

export default async function NewsPage() {
  const payload = await getPayloadClient()
  const { docs: articles } = await payload.find({
    collection: 'news-articles',
    where: { status: { equals: 'published' } },
    sort: '-publishedDate',
    limit: 20,
  })

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="font-[family-name:var(--font-darwin)] text-4xl md:text-5xl font-black mb-12 text-center">
          NEWS
        </h1>
        {articles.length === 0 ? (
          <p className="text-center text-gray-400">No articles yet.</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => {
              const image = typeof article.featuredImage === 'object' && article.featuredImage
              return (
                <article key={article.id} className="bg-[#2a2e38] rounded-lg overflow-hidden hover:ring-1 hover:ring-[#F07922] transition-all">
                  {image && image.url && (
                    <div className="relative h-48">
                      <Image
                        src={image.url}
                        alt={image.alt || article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-sm text-[#F07922]">
                      {new Date(article.publishedDate).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric',
                      })}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3">{article.title}</h2>
                    {article.excerpt && (
                      <p className="text-gray-400 text-sm line-clamp-3">{article.excerpt}</p>
                    )}
                    <Link
                      href={article.externalUrl || `/news/${article.slug}`}
                      target={article.externalUrl ? '_blank' : undefined}
                      className="inline-block mt-4 text-[#F07922] hover:text-[#d96a1a] text-sm font-semibold"
                    >
                      READ MORE →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}

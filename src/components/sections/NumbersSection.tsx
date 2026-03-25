import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function NumbersSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="py-24 md:py-32 bg-[#F07922]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl font-black text-black text-center mb-16">
          By the Numbers
        </h2>

        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix || ''}
                />
                <p className="text-black/80 font-semibold mt-2 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {data.footnote && (
          <p className="text-center text-black/60 text-xs mt-8 italic">
            {data.footnote}
          </p>
        )}
      </div>
    </section>
  )
}

import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function NumbersSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section className="py-16 md:py-24 bg-[#dadada]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-darwin)] text-2xl font-bold italic text-[#F07922] mb-12">
          Cost Savings*
        </h2>

        {data.stats && data.stats.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.stats.map((stat: any, i: number) => (
              <div key={i} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix || ''}
                />
                <p className="text-[#585F71] font-medium mt-2 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {data.footnote && (
          <p className="text-[#7A7A7A] text-xs mt-8 italic">
            {data.footnote}
          </p>
        )}
      </div>
    </section>
  )
}

export default function WhyGenFlatSection({ data }: { data: any }) {
  if (!data) return null

  const hasFully = data.fullyLoadedPoints && data.fullyLoadedPoints.length > 0
  const hasEmpty = data.emptyPoints && data.emptyPoints.length > 0

  if (!hasFully && !hasEmpty) return null

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-darwin)] text-5xl md:text-6xl font-black text-[#F07922] mb-16">
          GenFlat
        </h2>

        {/* Fully Loaded */}
        {hasFully && (
          <div className="mb-12">
            <h3 className="font-[family-name:var(--font-darwin)] text-lg font-bold text-[#373C48] mb-6 uppercase tracking-wider">
              &ldquo;Fully Loaded&rdquo; &ndash; No Difference
            </h3>
            <ul className="space-y-2">
              {data.fullyLoadedPoints.map((item: any, i: number) => (
                <li key={i} className="text-[#7A7A7A] text-sm">
                  - {item.point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Empty */}
        {hasEmpty && (
          <div>
            <h3 className="font-[family-name:var(--font-darwin)] text-lg font-bold text-[#373C48] mb-6 uppercase tracking-wider">
              &ldquo;Empty&rdquo; &ndash; 4x the Utilization of Space
            </h3>
            <ul className="space-y-2">
              {data.emptyPoints.map((item: any, i: number) => (
                <li key={i} className="text-[#7A7A7A] text-sm">
                  - {item.point}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

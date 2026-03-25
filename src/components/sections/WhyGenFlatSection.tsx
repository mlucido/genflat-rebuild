export default function WhyGenFlatSection({ data }: { data: any }) {
  if (!data) return null

  const hasFully = data.fullyLoadedPoints && data.fullyLoadedPoints.length > 0
  const hasEmpty = data.emptyPoints && data.emptyPoints.length > 0

  if (!hasFully && !hasEmpty) return null

  return (
    <section className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-black text-center mb-16">
          Why <span className="text-[#c8a84b]">GenFlat</span>?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fully Loaded Column */}
          {hasFully && (
            <div className="bg-[#1a1a1a] rounded-lg p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-[#c8a84b] rounded-full" />
                Fully Loaded
              </h3>
              <ul className="space-y-3">
                {data.fullyLoadedPoints.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#c8a84b] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Empty Column */}
          {hasEmpty && (
            <div className="bg-[#1a1a1a] rounded-lg p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-white/30 rounded-full" />
                Empty
              </h3>
              <ul className="space-y-3">
                {data.emptyPoints.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-[#c8a84b] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item.point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

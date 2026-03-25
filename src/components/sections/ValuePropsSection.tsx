export default function ValuePropsSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="whygenflat" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16">
          {data.heading}
        </h2>

        {data.props && data.props.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.props.map((prop: any, i: number) => (
              <div
                key={i}
                className="bg-[#0d0d0d] border border-white/5 rounded-lg p-8 hover:border-[#c8a84b]/30 transition-colors"
              >
                <div className="w-10 h-10 bg-[#c8a84b]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#c8a84b] font-bold text-lg">{i + 1}</span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
                  {prop.title}
                </h3>
                {prop.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

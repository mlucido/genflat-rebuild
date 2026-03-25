export default function AboutSection({ data }: { data: any }) {
  if (!data) return null

  // Parse heading to highlight "$20 Billion" in orange
  const heading = data.heading || ''
  const parts = heading.split('$20 Billion')

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {parts.length > 1 ? (
          <h2 className="font-[family-name:var(--font-darwin)] text-2xl md:text-3xl font-bold text-[#585F71] mb-6 leading-relaxed">
            {parts[0]}
            <span className="block text-5xl md:text-7xl lg:text-8xl font-black text-[#F07922] my-6">
              $20 Billion
            </span>
            {parts[1]}
          </h2>
        ) : (
          <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl font-black text-[#373C48] mb-8">
            {heading}
          </h2>
        )}
        <p className="text-[#7A7A7A] text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          {data.body}
        </p>
        {data.ctaText && (
          <a
            href="#process"
            className="inline-flex items-center gap-2 border-2 border-[#373C48] text-[#373C48] font-bold px-8 py-3 rounded-sm hover:bg-[#373C48] hover:text-white transition-all uppercase tracking-wider text-sm"
          >
            {data.ctaText}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </section>
  )
}

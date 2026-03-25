export default function AboutSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="about" className="py-24 md:py-32 bg-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight">
          {data.heading}
        </h2>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          {data.body}
        </p>
        {data.ctaText && (
          <a
            href="#process"
            className="inline-block border-2 border-[#c8a84b] text-[#c8a84b] font-bold px-8 py-3 rounded hover:bg-[#c8a84b] hover:text-black transition-all uppercase tracking-wider text-sm"
          >
            {data.ctaText}
          </a>
        )}
      </div>
    </section>
  )
}

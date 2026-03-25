import Image from 'next/image'

export default function ProcessSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-black mb-2">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="text-[#c8a84b] text-xl md:text-2xl font-semibold">
              {data.subheading}
            </p>
          )}
        </div>

        {data.steps && data.steps.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.steps.map((step: any, i: number) => {
              const image = typeof step.image === 'object' ? step.image : null
              return (
                <div key={i} className="text-center group">
                  <div className="relative aspect-[4/3] bg-[#1a1a1a] rounded-lg overflow-hidden mb-4">
                    {image?.url ? (
                      <Image
                        src={image.url}
                        alt={image.alt || step.stepLabel}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-black text-white/10">{i + 1}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 justify-center mb-2">
                    <span className="bg-[#c8a84b] text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wider">
                      {step.stepLabel}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

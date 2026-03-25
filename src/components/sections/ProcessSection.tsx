import Image from 'next/image'

export default function ProcessSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-0">
        {/* Heading */}
        <div className="text-center mb-12 px-6">
          <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl font-normal text-[#373C48] mb-2">
            Process
          </h2>
          <p className="text-lg">
            <span className="font-bold text-[#F07922]">{data.heading}</span>
            {' '}
            <span className="text-[#7A7A7A]">{data.subheading}</span>
          </p>
        </div>

        {/* Process steps - edge to edge photos */}
        {data.steps && data.steps.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step: any, i: number) => {
              const image = typeof step.image === 'object' ? step.image : null
              return (
                <div key={i} className="relative group">
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    {image?.url ? (
                      <Image
                        src={image.url}
                        alt={image.alt || step.stepLabel}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#F07922]/20 to-[#373C48]/20 flex items-center justify-center">
                        <span className="text-6xl font-black text-[#F07922]/20">{i + 1}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="font-[family-name:var(--font-darwin)] text-sm font-bold uppercase tracking-wider text-[#373C48] mb-1">
                      {step.stepLabel}
                    </h3>
                    <p className="text-[#7A7A7A] text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

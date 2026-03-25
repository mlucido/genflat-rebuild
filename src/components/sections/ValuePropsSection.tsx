export default function ValuePropsSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="whygenflat" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-darwin)] text-2xl md:text-3xl font-normal text-[#373C48] text-center mb-16">
          {data.heading}
        </h2>

        {data.props && data.props.length > 0 && (
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {data.props.map((prop: any, i: number) => (
              <div key={i} className="text-center">
                <h3 className="font-[family-name:var(--font-darwin)] text-lg font-bold text-[#373C48] mb-3">
                  {prop.title}
                </h3>
                {prop.description && (
                  <p className="text-[#7A7A7A] text-sm leading-relaxed">
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

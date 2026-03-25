export default function SpecsSection({ data }: { data: any }) {
  if (!data) return null

  const specs = [
    { label: 'Max Gross Weight', value: data.maxGrossWeight },
    { label: 'Tare Weight', value: data.tareWeight },
    { label: 'Payload', value: data.payload },
    { label: 'Internal Length', value: data.internalLength },
    { label: 'Internal Width', value: data.internalWidth },
    { label: 'Internal Height', value: data.internalHeight },
  ].filter((s) => s.value)

  return (
    <section id="specs" className="bg-white">
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div
          className="min-h-[400px] md:min-h-[500px] bg-cover bg-center"
          style={{ backgroundImage: 'url(/media/shipping-port.jpg)' }}
        />

        {/* Specs side */}
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="font-[family-name:var(--font-darwin)] text-2xl md:text-3xl font-normal text-[#373C48] mb-8">
            {data.heading || 'Technical Specifications'}
          </h2>

          <div className="space-y-3">
            {specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-gray-100 pb-2">
                <span className="text-[#7A7A7A] text-sm font-medium">
                  {spec.label}:
                </span>
                <span className="text-[#373C48] font-semibold text-sm">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function SpecsSection({ data }: { data: any }) {
  if (!data) return null

  const specs = [
    { label: 'Total Length', value: data.totalLength },
    { label: 'Max Gross Weight', value: data.maxGrossWeight },
    { label: 'Tare Weight', value: data.tareWeight },
    { label: 'Payload', value: data.payload },
    { label: 'Internal Length', value: data.internalLength },
    { label: 'Internal Width', value: data.internalWidth },
    { label: 'Internal Height', value: data.internalHeight },
  ].filter((s) => s.value)

  return (
    <section id="specs" className="py-24 md:py-32 bg-[#2a2e38]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-4xl lg:text-5xl font-black text-center mb-16">
          {data.heading || 'Technical Specifications'}
        </h2>

        <div className="bg-[#373C48] rounded-lg border border-white/5 overflow-hidden">
          <table className="w-full">
            <tbody>
              {specs.map((spec, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? 'bg-white/[0.02]' : ''}
                >
                  <td className="px-6 py-4 text-gray-400 text-sm font-medium uppercase tracking-wider border-r border-white/5 w-1/2">
                    {spec.label}
                  </td>
                  <td className="px-6 py-4 text-white font-semibold text-lg">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

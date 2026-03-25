export default function HeroSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="hero" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#373C48]">
      {/* Video background */}
      <div className="absolute inset-0">
        {data.videos && data.videos.length > 0 && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          >
            {data.videos.map((v: any, i: number) => {
              const video = typeof v.video === 'object' ? v.video : null
              return video?.url ? (
                <source key={i} src={video.url} type={video.mimeType || 'video/mp4'} />
              ) : null
            })}
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#373C48]/80 via-[#373C48]/60 to-[#373C48]/90" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-[family-name:var(--font-darwin)] text-5xl md:text-7xl font-black text-white leading-[0.95] mb-3">
          {data.headline}
        </h1>
        {data.subheadline && (
          <h2 className="font-[family-name:var(--font-darwin)] text-3xl md:text-5xl font-black text-[#F07922] leading-[0.95] mb-8">
            {data.subheadline}
          </h2>
        )}
        {data.ctaText && (
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {data.ctaText}
          </p>
        )}
      </div>
    </section>
  )
}

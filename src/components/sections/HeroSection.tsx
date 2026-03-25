export default function HeroSection({ data }: { data: any }) {
  if (!data) return null

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background — falls back to dark bg */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        {data.videos && data.videos.length > 0 && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            {data.videos.map((v: any, i: number) => {
              const video = typeof v.video === 'object' ? v.video : null
              return video?.url ? (
                <source key={i} src={video.url} type={video.mimeType || 'video/mp4'} />
              ) : null
            })}
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-4">
          {data.headline}
        </h1>
        {data.subheadline && (
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-black text-[#c8a84b] leading-[0.95] mb-8">
            {data.subheadline}
          </h2>
        )}
        {data.ctaText && (
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            {data.ctaText}
          </p>
        )}
        <a
          href="#about"
          className="inline-block bg-[#c8a84b] text-black font-bold px-8 py-4 text-lg rounded hover:bg-[#d4b85c] transition-colors uppercase tracking-wider"
        >
          Learn More
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#c8a84b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

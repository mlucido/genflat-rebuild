'use client'

import { useState, useEffect } from 'react'

interface VideoSliderProps {
  videos: Array<{ url: string; mimeType?: string }>
}

export default function VideoSlider({ videos }: VideoSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (videos.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [videos.length])

  if (!videos || videos.length === 0) return null

  return (
    <div className="absolute inset-0">
      {videos.map((video, i) => (
        <video
          key={i}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === currentIndex ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src={video.url} type={video.mimeType || 'video/mp4'} />
        </video>
      ))}
    </div>
  )
}

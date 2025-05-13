'use client'
import Image from 'next/image'
import React from 'react'

const images = ['/1.png', '/2.png', '/3.png', '/docker.webp', '/express.png', '/6.png', '/7.png','/8.png','/react.png','/ts.png','/postger.png'
  ]

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="slider" data-reverse="true">
        <div className="list">
          {images.map((src, i) => (
            <div
              className="item"
              key={i}
              style={{ '--position': i + 1 } as React.CSSProperties}
            >
              <Image src={src} alt={`slide-${i}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider

import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full  '>
        <video src=""
        autoPlay
        muted
        loop
        className='absolute top-[-340px] left-0 z-[1] w-full h-full object-cover rotate-180 '>
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>


    </div>
  )
}

export default Hero
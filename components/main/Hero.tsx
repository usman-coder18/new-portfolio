import React from 'react'
import HeroContent from '../sub/HeroContent'
import Rotation from './Rotation'
// import Rotation from './Rotation'
const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full  '>
    <div className="absolute top-0 right-0 z-20">
        <Rotation />
      </div>
        <video src=""
        autoPlay
        muted
        loop
        className='absolute top-[-340px] left-0 z-[1] w-full h-full object-cover rotate-180 '>
            <source src='/blackhole.webm' type='video/webm'/>
        </video>
        <HeroContent/>

          {/* <Rotation/> */}

    </div>
  )
}

export default Hero
"use client";
import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
  return (
    <div className="">
      <Typewriter
        options={{
          strings: ['(MERN Stack Developer)'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterText;

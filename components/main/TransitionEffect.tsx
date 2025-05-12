// components/main/TransitionEffect.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

const TransitionEffect = ({ show }: { show: boolean }) => {
  return (
    <AnimatePresence>
      {show && (
         <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-black"
        // style={{ backgroundColor: 'rgb(54, 6, 93)' }}
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-purple-600"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-purple-500"
        // style={{ backgroundColor: '#2e044c' }} // Replace with your custom color
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
      )}
    </AnimatePresence>
  );
};

export default TransitionEffect;

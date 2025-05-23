"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error: The "maath/random" module does not have type definitions, so we suppress the error.

import * as random from "maath/random/dist/maath-random.esm"; 
import * as THREE from "three"; // Add this import to resolve the 'THREE' namespace issue

interface StarBackgroundProps {
  [key: string]: any;
}

const StarBackground = (props: StarBackgroundProps) => {
  const ref = useRef<THREE.Points>(null); // Now 'THREE' is recognized
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[1] pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }} style={{ pointerEvents: "none" }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;

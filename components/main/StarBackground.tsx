"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Group } from "three"; // Import Group from three.js for typing
 // @ts-expect-error
    // @ts-expect-error: The "maath/random" module does not have 
import * as random from "maath/random/dist/maath-random.esm";

// Define the props type for the StarBackground component
interface StarBackgroundProps {
  // Pass any props expected by Points (for now, just an empty object)
  [key: string]: any;
}

const StarBackground = (props: StarBackgroundProps) => {
  // Use Group type for ref as Points will be a child of Group
  const ref = useRef<Group>(null); 

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
        {...props}  // Pass additional props to Points
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

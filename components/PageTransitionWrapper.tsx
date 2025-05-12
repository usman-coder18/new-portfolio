// components/main/TransitionWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import TransitionEffect from "./main/TransitionEffect";

const TransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTransition(false);
    }, 1000); // Show transition for 1s on page load

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <TransitionEffect show={showTransition} />
      <div>{children}</div>
    </>
  );
};

export default TransitionWrapper;

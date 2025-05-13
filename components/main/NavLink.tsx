"use client";

import { useState } from "react";
import TransitionEffect from "./TransitionEffect";

const NavLink = ({ label, to }: { label: string; to: string }) => {
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTransition(true);

    setTimeout(() => {
      const section = document.querySelector(to);
      section?.scrollIntoView({ behavior: "smooth" });
      setShowTransition(false);
    }, 800); 
  };

  return (
    <>
      <a href={to} onClick={handleClick} className="cursor-pointer">
        {label}
      </a>
      <TransitionEffect show={showTransition} />
    </>
  );
};

export default NavLink;

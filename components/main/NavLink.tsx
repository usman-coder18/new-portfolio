"use client";

import { useState } from "react";
import TransitionEffect from "./TransitionEffect";

type NavLinkProps = {
  label: string;
  to: string;
  onClick?: () => void;  // optional callback prop
};

const NavLink = ({ label, to, onClick }: NavLinkProps) => {
  const [showTransition, setShowTransition] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTransition(true);

    setTimeout(() => {
      const section = document.querySelector(to);
      section?.scrollIntoView({ behavior: "smooth" });

      setShowTransition(false);

      // Call parent's onClick to close menu (if any)
      if (onClick) onClick();
    }, 800);
  };

  return (
    <>
      <a
        href={to}
        onClick={handleClick}
        className="cursor-pointer hover:text-[#7042f8] transition-colors"
      >
        {label}
      </a>
      <TransitionEffect show={showTransition} />
    </>
  );
};

export default NavLink;

"use client";
import { Socials } from "@/constants/index";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="flex items-center justify-between h-full w-full">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="ml-2 font-bold text-gray-300 text-sm sm:text-base md:text-lg">
  Muhammad Usman
</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 w-[420px]">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#projects" className="cursor-pointer">
            Contact
          </a>
        </div>

        {/* Socials + Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex gap-4">
            {Socials.map((social) => (
                  <Link href={social.url} key={social.name} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </a>
                </Link>
            ))}
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#0a0a23] border-t border-[#2A0E61] rounded-md py-4 px-4 space-y-3 text-gray-200">
          <a href="#about-me" className="block" onClick={() => setIsOpen(false)}>
            About me
          </a>
          <a href="#skills" className="block" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="block" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#projects" className="block" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <div className="flex gap-4 mt-3">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

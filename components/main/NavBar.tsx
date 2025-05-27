"use client";
import { Socials } from "@/constants/index";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";
import TypewriterText from "./TypewriterText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu after clicking any nav link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10">
      <div className="flex items-center justify-between h-full w-full">
        <a
          href="#about-me"
          className="flex items-center hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/profile.jpeg"
            alt="profile"
            width={38}
            height={38}
            className="rounded-full"
            priority
          />
          <div className="ml-2">
            <span className="font-bold text-gray-300 text-sm sm:text-base md:text-lg">
              Muhammad Usman
            </span>
            <br />
            <span className="text-[9px] sm:text-[15px] text-gray-400">
              <TypewriterText />
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200 w-[420px]">
          <NavLink label="About" to="#about-me" />
          <NavLink label="Skills" to="#skills" />
          <NavLink label="Projects" to="#projects" />
          <NavLink label="Contact" to="#Contact" />
        </div>

        {/* Socials & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {Socials.map((social) => (
              <Link
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mt-2 bg-[#0a0a23] border-t border-[#2A0E61] rounded-md py-4 px-4 space-y-3 text-gray-200 transition-all duration-300 ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="block hover:text-[#7042f8] transition-colors duration-300">
          <NavLink label="About" to="#about-me" onClick={handleLinkClick} />
        </div>
        <div className="block hover:text-[#7042f8] transition-colors duration-300">
          <NavLink label="Skills" to="#skills" onClick={handleLinkClick} />
        </div>
        <div className="block hover:text-[#7042f8] transition-colors duration-300">
          <NavLink label="Projects" to="#projects" onClick={handleLinkClick} />
        </div>
        <div className="block hover:text-[#7042f8] transition-colors duration-300">
          <NavLink label="Contact" to="#Contact" onClick={handleLinkClick} />
        </div>

        <div className="flex gap-4 mt-3">
          {Socials.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

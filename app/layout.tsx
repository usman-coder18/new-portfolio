import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";

import Navbar from "@/components/main/NavBar";
import TransitionWrapper from "@/components/PageTransitionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usman Portfolio",
  description: "portfolio of Usman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden ${geistMono.variable} antialiased`}
      >
        <TransitionWrapper>
        <StarsCanvas />
        <div className="relative z-[20]" />
        <Navbar />
        {children}
        </TransitionWrapper>
      </body>
    </html>
  );
}

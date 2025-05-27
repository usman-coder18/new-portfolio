// 'use client'

import ContactForm from "@/components/main/Contact";

import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import ChatBot from "@/components/sub/ChatBot";
export default function Home() {
  return (
    <main className="w-full h-full" > 
    <div className="flex flex-col h-[850px] gap-20">

  <Hero />
  <Skills/>
  {/* <ChatBot/> */}
  <Encryption/>
  <Projects/>
  <ContactForm/>

    </div>
    </main>
   
  );
}

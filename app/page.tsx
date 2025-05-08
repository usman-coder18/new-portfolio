import ContactForm from "@/components/main/Contact";
import Encryption from "@/components/main/Encryption";
// import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Project";
import Skills from "@/components/main/Skills";
// import Rotation from '@/components/main/Rotation';
export default function Home() {
  return (
    <main className="w-full h-full" > 
    <div className="flex flex-col h-[850px] gap-20">

  <Hero />
  {/* <Rotation/> */}
  <Skills/>
  <Encryption/>
  <Projects/>
  <ContactForm/>
  {/* <Footer/> */}
    </div>
    </main>
   
  );
}

//components
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

// import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Cta />
    </main>
  );
}

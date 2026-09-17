import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { WhatWeDo } from "@/components/what-we-do";
import { VisionMission } from "@/components/vision-mission";
import { Leadership } from "@/components/leadership";
import { Profile } from "@/components/profile";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Process />
        <WhatWeDo />
        <VisionMission />
        <Leadership />
        <Profile />
      </main>
      <Footer />
    </>
  );
}

import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { Leadership } from "@/components/leadership";
import { Services } from "@/components/services";
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
        <Leadership />
        <Services />
      </main>
      <Footer />
    </>
  );
}

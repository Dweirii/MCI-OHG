import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content";
import { Button, Container, MixedText } from "./ui";

export function Projects() {
  const [first, second, third] = projects.items;

  return (
    <section className="relative overflow-hidden py-[150px] max-md:py-24">
      <Container max="max-w-[1820px]" className="flex flex-col gap-[70px]">
        <div className="flex items-center gap-[70px] max-md:flex-col max-md:items-start max-md:gap-6">
          <p className="max-w-[430px] flex-1 text-mocha">{projects.intro}</p>
          <div className="h-px flex-[0.8] bg-mocha-20 max-md:hidden" />
          <Button href="/project">All Projects</Button>
        </div>

        {/* Staggered two-column layout: card | title, then an offset pair. */}
        <div className="grid grid-cols-2 gap-x-[120px] gap-y-20 max-lg:gap-x-12 max-md:grid-cols-1 max-md:gap-y-14">
          <ProjectCard {...first} />
          <div className="flex items-start max-md:order-first">
            <MixedText
              text={projects.heading}
              script={projects.headingScript}
              className="h2 w-full max-w-[565px]"
            />
          </div>
          <div className="flex w-[116%] justify-end max-md:w-full max-md:justify-start">
            <ProjectCard {...second} />
          </div>
          <div className="-mt-[210px] flex justify-end max-lg:-mt-24 max-md:mt-0">
            <ProjectCard {...third} />
          </div>
        </div>
      </Container>

      <Image
        src="/media/lines.svg"
        alt=""
        width={1959}
        height={1137}
        className="pointer-events-none absolute inset-x-[-30px] top-[250px] z-[1] w-[calc(100%+60px)] max-w-none opacity-10"
      />
    </section>
  );
}

function ProjectCard({ name, href, image }: { name: string; href: string; image: string }) {
  return (
    <Link href={href} className="group flex w-full max-w-[560px] flex-col gap-[30px]">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={1200}
          height={770}
          sizes="(max-width: 809px) 100vw, 560px"
          className="aspect-[560/359] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <h2 className="h5">{name}</h2>
        <span className="relative inline-flex h-11 min-w-[170px] rounded-[4px] border border-mocha-20 px-3 pt-2.5 text-nav transition-colors group-hover:bg-dark group-hover:text-ivory">
          View details
          <span className="absolute right-2.5 bottom-2.5 size-[5px] rounded-full bg-current" />
        </span>
      </div>
    </Link>
  );
}

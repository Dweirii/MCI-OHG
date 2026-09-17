import Image from "next/image";
import { brand, hero } from "@/content";
import { Eyebrow, Heading } from "./ui";

/** Full-screen photo with the quote set low on the left, like the profile cover. */
export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[680px] items-end overflow-hidden bg-skin-deep max-md:min-h-[600px]">
      <Image src={hero.image} alt={hero.imageAlt} fill priority sizes="100vw" className="object-cover" />
      {/* Darken the top for the nav and the bottom for the quote. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-dark/70 via-dark/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-dark/85 via-dark/45 to-transparent" />

      <div className="relative z-10 flex w-full items-end justify-between gap-10 px-[30px] pb-16 max-md:px-5 max-md:pb-10">
        <div className="fade-in flex max-w-[1040px] flex-col gap-7">
          <Eyebrow className="text-white/85">{hero.label}</Eyebrow>
          <Heading as="h1" text={hero.quote} className="h4 text-white lg:text-[42px] max-md:text-[24px]" />
        </div>

        {/* The profile cover runs the website address up its right edge. */}
        <p className="shrink-0 text-label tracking-[0.3em] text-white/80 [writing-mode:vertical-rl] max-md:hidden">
          {brand.website}
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import { hero } from "@/content";
import { MixedText, Sparkle } from "./ui";

/** Full-screen photo with the quote set low on the left. */
export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[680px] items-end overflow-hidden bg-dark max-md:min-h-[600px]">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Darken the top for the nav and the bottom for the quote, then fade into the next section. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-dark/85 via-dark/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-dark via-dark/45 to-transparent" />

      <div className="relative z-10 flex w-full items-end justify-between gap-10 px-[30px] pb-16 max-md:px-5 max-md:pb-10">
        <div className="fade-in flex max-w-[1080px] flex-col gap-6">
          <p className="flex items-center gap-2.5 text-label text-ivory/80">
            <Sparkle className="size-2.5" />
            {hero.label}
          </p>
          <MixedText
            as="h1"
            text={hero.quote}
            script={hero.quoteScript}
            className="h4 text-left text-ivory lg:text-[44px] max-md:text-[26px]"
          />
        </div>

        <div className="flex shrink-0 flex-col items-center gap-3 text-label text-ivory/70 max-md:hidden">
          Scroll
          <span className="h-14 w-px bg-ivory/30" />
        </div>
      </div>
    </section>
  );
}

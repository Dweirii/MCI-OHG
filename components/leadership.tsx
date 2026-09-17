"use client";

import Image from "next/image";
import { useState } from "react";
import { leadership } from "@/content";
import { Container, Eyebrow, Heading } from "./ui";

/** The General Manager's message: a photo on a taupe block, an opening paragraph, and a card of quotes. */
export function Leadership() {
  const [index, setIndex] = useState(0);
  const count = leadership.quotes.length;
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <section className="bg-paper py-[150px] max-md:py-24">
      <Container className="flex flex-col gap-[70px]">
        <div className="flex flex-col gap-6">
          <Eyebrow className="text-skin-deep">{leadership.label}</Eyebrow>
          <Heading text={leadership.heading} className="h2 max-w-[900px] text-skin-deep" />
        </div>

        <div className="relative h-[573px] max-lg:flex max-lg:h-auto max-lg:flex-col max-lg:gap-6">
          {/* Taupe block offset behind the photo, as behind the portrait in the profile. */}
          <div className="bg-taupe absolute top-[-24px] left-[24px] h-[380px] w-[58.3%] max-lg:hidden" />
          <div className="absolute top-0 left-0 h-[380px] w-[58.3%] overflow-hidden max-lg:relative max-lg:aspect-video max-lg:h-auto max-lg:w-full">
            <Image src={leadership.image} alt="" fill sizes="(max-width: 1199px) 100vw, 60vw" className="object-cover" />
          </div>

          <p className="absolute top-0 right-0 w-[36%] text-[15px] text-mocha max-lg:static max-lg:w-full">
            {leadership.intro}
          </p>

          <div className="bg-taupe absolute right-0 bottom-0 flex min-h-[400px] w-[49%] flex-col overflow-hidden p-[50px] text-white max-lg:static max-lg:w-full max-md:min-h-[360px] max-md:p-8">
            <p className="text-label text-white/80">
              {index + 1}
              <span className="opacity-60">/{count}</span>
            </p>
            <div key={index} className="fade-in relative z-10 mt-auto flex max-w-[460px] flex-col gap-5 pt-10">
              <p className="h6">{leadership.quotes[index]}</p>
              <div className="flex flex-col gap-1 text-[14px]">
                <p className="font-bold tracking-[0.08em] uppercase">{leadership.name}</p>
                <p className="flex items-center gap-2 text-white/80">
                  {leadership.role}
                  <span className="size-1 rounded-full bg-current" />
                  {leadership.company}
                </p>
              </div>
            </div>
            <Image
              src="/media/room-sketch.svg"
              alt=""
              width={180}
              height={160}
              className="pointer-events-none absolute right-2.5 bottom-2.5 h-auto w-[170px] opacity-25 invert max-md:w-[110px]"
            />
          </div>

          <div className="absolute bottom-0 left-0 flex gap-2.5 max-lg:static">
            <ArrowButton label="Previous quote" src="/media/arrow-left.svg" onClick={() => go(-1)} />
            <ArrowButton label="Next quote" src="/media/arrow-right.svg" onClick={() => go(1)} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ArrowButton({ label, src, onClick }: { label: string; src: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-[62px] items-center justify-center border border-skin/50 transition-colors hover:bg-sand"
    >
      <Image src={src} alt="" width={32} height={18} className="w-8 opacity-70" />
    </button>
  );
}

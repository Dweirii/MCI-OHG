"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { process } from "@/content";
import { Container, Eyebrow, Heading, Ring, Sparkle } from "./ui";

/**
 * The heading and step card stay pinned while the page scrolls through two
 * half-screen spacers; each spacer advances the step.
 */
export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const steps = process.steps;

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const { top, height } = track.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(-top / scrollable, 0), 0.999) : 0;
      setActive(Math.floor(progress * steps.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [steps.length]);

  return (
    <section className="bg-taupe relative overflow-x-clip pt-[150px] pb-[190px] text-white max-md:py-24">
      <Container>
        <div ref={trackRef} className="relative h-[calc(100vh+100vh)] max-md:h-auto">
          <div className="sticky top-[50px] flex flex-col items-center gap-[100px] max-md:static max-md:gap-12">
            <div className="flex flex-col items-center gap-6 text-center">
              <Eyebrow className="text-white/80">{process.label}</Eyebrow>
              <Heading text={process.heading} className="h2 max-w-[1000px]" />
            </div>

            {/* Desktop/tablet: one pinned card that changes step. */}
            <div className="grid w-full grid-cols-[1fr_396px_1fr] items-center gap-[100px] max-lg:grid-cols-[1fr_300px_1fr] max-lg:gap-10 max-md:hidden">
              <div className="flex flex-col gap-2.5 self-center">
                {steps.map((s, i) => (
                  <StepTitle key={s.label} step={s} hidden={i !== active} />
                ))}
              </div>

              <div className="relative">
                <div className="absolute inset-x-5 -top-2.5 h-full bg-white/15" />
                <div className="absolute inset-x-10 -top-5 h-full bg-white/25" />
                <div className="relative aspect-[396/426] overflow-hidden">
                  {steps.map((s, i) => (
                    <Image
                      key={s.image}
                      src={s.image}
                      alt=""
                      fill
                      sizes="396px"
                      className={`object-cover transition-all duration-700 ease-out ${
                        i === active ? "translate-y-0 opacity-100" : i < active ? "-translate-y-6 opacity-0" : "translate-y-6 opacity-0"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="grid">
                  {steps.map((s, i) => (
                    <p
                      key={s.label}
                      className={`col-start-1 row-start-1 max-w-[360px] text-[15px] text-white/90 transition-opacity duration-500 ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {s.body}
                    </p>
                  ))}
                </div>
                <div className="flex size-[94px] items-center justify-center rounded-full border border-white/25">
                  <div className="flex size-[70px] items-center justify-center rounded-full border border-white/25 text-[24px] font-light">
                    {active + 1}
                    <span className="text-white/60">/{steps.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone: steps simply stack. */}
            <div className="flex w-full flex-col gap-14 md:hidden">
              {steps.map((s) => (
                <div key={s.label} className="flex flex-col gap-5">
                  <StepTitle step={s} />
                  <Image src={s.image} alt="" width={1200} height={1300} className="h-auto w-full" />
                  <p className="text-[15px] text-white/90">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Ring className="top-5" tone="light" />
    </section>
  );
}

function StepTitle({
  step,
  hidden = false,
}: {
  step: (typeof process.steps)[number];
  hidden?: boolean;
}) {
  if (hidden) return null;
  return (
    <div className="fade-in flex flex-col gap-3">
      <p className="flex items-center gap-2 text-label text-white/80">
        <Sparkle className="size-2.5" />
        {step.label}
      </p>
      <Heading as="h3" text={step.title} className="h5" />
    </div>
  );
}

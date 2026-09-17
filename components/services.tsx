"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content";
import { MixedText, Sparkle } from "./ui";

/**
 * A full-screen panel pinned for two extra screens of scrolling; each screen
 * swaps to the next service tier.
 */
export function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = services.items;

  useEffect(() => {
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const { top } = track.getBoundingClientRect();
      const step = Math.floor(-top / window.innerHeight);
      setActive(Math.min(Math.max(step, 0), items.length - 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  return (
    <section>
      <div ref={trackRef} className="relative h-[300vh] max-md:h-auto">
        <div className="sticky top-0 grid h-screen grid-cols-2 max-md:static max-md:h-auto max-md:grid-cols-1">
          <div className="flex flex-col items-center justify-center gap-4 bg-sand px-[30px] py-14 max-md:px-5">
            <p className="flex items-center gap-2 text-label">
              <Sparkle className="size-2.5 text-dark" />
              {services.label}
            </p>
            <MixedText
              text={services.heading}
              script={services.headingScript}
              className="h4 max-w-[420px] text-center"
            />
            <p className="max-w-[420px] text-center text-[14px] text-mocha">{services.intro}</p>

            {/* Tiers stacked in one grid cell so they can cross-fade. */}
            <div className="mt-6 grid w-full max-w-[500px] max-md:hidden">
              {items.map((item, i) => (
                <Tier key={item.name} item={item} visible={i === active} />
              ))}
            </div>
            <div className="mt-6 flex w-full flex-col gap-14 md:hidden">
              {items.map((item) => (
                <Tier key={item.name} item={item} visible />
              ))}
            </div>
          </div>

          <div className="relative max-md:hidden">
            {items.map((item, i) => (
              <Image
                key={item.image}
                src={item.image}
                alt=""
                fill
                sizes="50vw"
                className={`object-cover object-right transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[50vh] max-md:h-24" />
    </section>
  );
}

function Tier({
  item,
  visible,
}: {
  item: (typeof services.items)[number];
  visible: boolean;
}) {
  return (
    <div
      aria-hidden={!visible}
      className={`col-start-1 row-start-1 flex flex-col transition-all duration-700 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="relative aspect-[500/472] w-full overflow-hidden max-md:aspect-[4/3]">
        <Image src={item.image} alt={item.name} fill sizes="(max-width: 809px) 100vw, 500px" className="object-cover object-left" />
      </div>
      <MixedText as="h3" text={item.name} script={item.name[0]} className="h3-sm mt-8" />
      <p className="mt-2 text-[14px] font-medium">{item.tagline}</p>
      <p className="mt-3 text-[14px] text-mocha">{item.body}</p>
    </div>
  );
}

import Image from "next/image";
import { services } from "@/content";
import { Eyebrow, Heading } from "./ui";

/** The profile's "What we do?" spread: a numbered taupe panel beside a tall photo. */
export function WhatWeDo() {
  return (
    <section className="grid grid-cols-[1.05fr_0.95fr] bg-paper max-lg:grid-cols-1">
      <div className="bg-taupe flex flex-col gap-12 px-[70px] py-[120px] text-white max-lg:px-10 max-md:px-5 max-md:py-20">
        <div className="flex flex-col gap-6">
          <Eyebrow className="text-white/80">{services.label}</Eyebrow>
          <Heading text={services.heading} className="h2 max-w-[620px]" />
          <p className="max-w-[520px] text-white/90">{services.intro}</p>
        </div>

        <ol className="flex flex-col">
          {services.items.map((item, i) => (
            <li key={item.name} className="grid grid-cols-[90px_1fr] items-start gap-6 border-t border-white/20 py-7 max-md:grid-cols-[56px_1fr]">
              <span className="text-[84px] leading-[0.8] font-light max-md:text-[56px]">{i + 1}</span>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="text-nav font-bold">{item.name}</h3>
                {item.tagline && <p className="text-[17px] font-light">{item.tagline}</p>}
                {item.body && <p className="max-w-[460px] text-[14px] text-white/80">{item.body}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="relative min-h-[720px] max-lg:min-h-[520px]">
        <Image src={services.image} alt="A double-height living room with pendant lights and an olive tree" fill sizes="(max-width: 1199px) 100vw, 48vw" className="object-cover" />
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brand, nav } from "@/content";
import { Sparkle } from "./ui";

/** Sits over the hero photo: logo on the left, links on the right. */
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-[30px] pt-[30px] max-md:px-5 max-md:pt-5">
      <div className="flex h-20 items-center justify-between border-y border-ivory-10 max-md:h-16">
        <Link href="/" aria-label={`${brand.name} home`} className="shrink-0">
          <Image
            src={brand.mark.src}
            alt={brand.name}
            width={brand.mark.width}
            height={brand.mark.height}
            priority
            className="h-auto w-[84px] max-md:w-[64px]"
          />
        </Link>

        <nav className="flex items-center gap-12 max-lg:gap-7 max-md:hidden">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-2.5 text-nav transition-colors ${
                i === 0 ? "text-skin" : "text-ivory hover:text-skin"
              }`}
            >
              <Sparkle
                className={`size-2.5 text-skin transition-transform duration-500 ${
                  i === 0 ? "rotate-90" : "group-hover:rotate-90"
                }`}
              />
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-2 text-nav text-ivory md:hidden"
        >
          <Sparkle className={`size-2.5 text-skin transition-transform ${open ? "rotate-90" : ""}`} />
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <ul className="fade-in mt-2 bg-dark/95 px-5 py-4 backdrop-blur md:hidden">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-2 text-nav text-ivory" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

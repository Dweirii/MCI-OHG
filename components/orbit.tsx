"use client";

import { useEffect, useRef } from "react";

const RADIUS = 180;
const TILT = -24;
const BASE_SPEED = 0.04; // degrees per frame
const SCROLL_BOOST = 0.06;

/** A ring of images turning around a vertical axis; scrolling speeds it up. */
export function Orbit({ images }: { images: string[] }) {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let angle = 0;
    let boost = 0;
    let lastY = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      boost += Math.abs(window.scrollY - lastY) * SCROLL_BOOST;
      lastY = window.scrollY;
    };
    const tick = () => {
      boost *= 0.92;
      angle += BASE_SPEED * 6 + boost * 0.1;
      ring.style.transform = `rotateX(${TILT}deg) rotateY(${angle}deg)`;
      frame = requestAnimationFrame(tick);
    };

    ring.style.transform = `rotateX(${TILT}deg)`;
    if (reduced) return;
    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const step = 360 / images.length;

  return (
    <div className="flex h-[320px] w-full items-center justify-center [perspective:1100px]">
      <div ref={ringRef} className="relative h-[112px] w-[180px] [transform-style:preserve-3d]">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0"
            style={{ transform: `rotateY(${i * step}deg) translateZ(${RADIUS}px)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- 3D transforms and next/image wrappers don't mix well */}
            <img src={src} alt="" className="size-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

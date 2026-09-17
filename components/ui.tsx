import Link from "next/link";
import type { ElementType, ReactNode } from "react";

/** A balanced heading in the brand's light capitals. */
export function Heading({
  as: Tag = "h2",
  text,
  className = "",
}: {
  as?: ElementType;
  text: string;
  className?: string;
}) {
  return <Tag className={`balance ${className}`}>{text}</Tag>;
}

/** Small wide-spaced label that opens a section, as in the company profile. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Sparkle({ className = "size-2.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden>
      <path
        d="M10 0C9.554 9.188 9.187 9.554 0 10c9.188.446 9.554.813 10 10 .446-9.188.813-9.554 10-10-9.188-.446-9.554-.813-10-10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Container({
  children,
  className = "",
  max = "max-w-[1460px]",
}: {
  children: ReactNode;
  className?: string;
  max?: string;
}) {
  return (
    <div className={`relative z-[2] mx-auto w-full px-[30px] max-md:px-5 ${max} ${className}`}>
      {children}
    </div>
  );
}

/** Rectangular button with the small dot in the bottom-right corner. */
export function Button({
  href,
  children,
  tone = "skin",
  className = "",
}: {
  href: string;
  children: ReactNode;
  tone?: "skin" | "light" | "outline";
  className?: string;
}) {
  const tones = {
    skin: "bg-skin-deep text-white hover:bg-[#75604f]",
    light: "bg-paper text-skin-deep hover:bg-white",
    outline: "border border-mocha-20 text-dark hover:bg-sand",
  };
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-11 min-w-[170px] items-start px-3 pt-3 text-nav transition-colors ${tones[tone]} ${className}`}
    >
      {children}
      <span className="absolute right-2.5 bottom-2.5 size-[5px] rounded-full bg-current transition-transform duration-300 group-hover:scale-150" />
    </Link>
  );
}

/** Thin decorative ring behind a section, with a sparkle on its edge. */
export function Ring({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const colors = tone === "light" ? "border-white/15 text-white/60" : "border-skin/25 text-skin";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 z-[1] aspect-square h-[1220px] -translate-x-1/2 rounded-full border ${colors} ${className}`}
    >
      <Sparkle className="absolute -bottom-[7px] left-1/2 size-3.5 -translate-x-1/2" />
    </div>
  );
}

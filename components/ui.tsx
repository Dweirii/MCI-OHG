import Link from "next/link";
import type { ElementType, ReactNode } from "react";

/**
 * Heading text where chosen letters switch font: letters in `script` use the
 * script face when they start a word, letters in `italic` use light italic
 * Inter everywhere. Italic wins when a letter is in both sets.
 */
export function MixedText({
  as: Tag = "h2",
  text,
  script = "",
  italic = "o,a",
  className = "",
}: {
  as?: ElementType;
  text: string;
  script?: string;
  italic?: string;
  className?: string;
}) {
  const toSet = (list: string) =>
    new Set(list.split(",").map((c) => c.trim().toLowerCase()).filter(Boolean));
  const scriptSet = toSet(script);
  const italicSet = toSet(italic);

  let wordStart = true;
  const parts: ReactNode[] = [];
  let run = "";
  const flush = () => {
    if (run) parts.push(run);
    run = "";
  };

  Array.from(text.toUpperCase()).forEach((ch, i) => {
    const lower = ch.toLowerCase();
    const isWordChar = /[a-z0-9]/i.test(ch);
    if (italicSet.has(lower)) {
      flush();
      parts.push(<span key={i} className="ch-italic">{ch}</span>);
    } else if (wordStart && isWordChar && scriptSet.has(lower)) {
      flush();
      parts.push(<span key={i} className="ch-script">{ch}</span>);
    } else {
      run += ch;
    }
    if (/\s/.test(ch)) wordStart = true;
    else if (isWordChar) wordStart = false;
  });
  flush();

  return (
    <Tag className={`balance ${className}`} aria-label={text}>
      <span aria-hidden>{parts}</span>
    </Tag>
  );
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
  tone?: "skin" | "outline" | "dark";
  className?: string;
}) {
  const tones = {
    skin: "bg-skin text-dark hover:bg-[#b9a697]",
    outline: "border border-mocha-20 text-dark hover:bg-sand",
    dark: "bg-dark text-ivory hover:bg-[#3a3129]",
  };
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-11 min-w-[170px] items-start rounded-[4px] px-3 pt-2.5 text-nav transition-colors ${tones[tone]} ${className}`}
    >
      {children}
      <span className="absolute right-2.5 bottom-2.5 size-[5px] rounded-full bg-current transition-transform duration-300 group-hover:scale-150" />
    </Link>
  );
}

/** Thin decorative ring behind taupe sections, with a sparkle on its edge. */
export function Ring({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 z-[1] aspect-square h-[1220px] -translate-x-1/2 rounded-full border border-dark/10 ${className}`}
    >
      <Sparkle className="absolute -bottom-[7px] left-1/2 size-3.5 -translate-x-1/2 text-dark/50" />
    </div>
  );
}

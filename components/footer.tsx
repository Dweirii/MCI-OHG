import Image from "next/image";
import Link from "next/link";
import { brand, contact, footer, legal, nav } from "@/content";
import { Button, Heading, Sparkle } from "./ui";

export function Footer() {
  return (
    <footer className="bg-taupe text-white">
      {/* Call to action over a full-bleed photo that fades into the footer. */}
      <section className="relative flex min-h-[860px] flex-col items-center justify-center gap-10 overflow-hidden px-[30px] py-40 max-md:min-h-[620px] max-md:px-5">
        <Image src={footer.ctaImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-dark/45" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-skin-deep to-transparent" />
        <Heading text={footer.cta} className="h-xl relative max-w-[1300px] text-center" />
        <div className="relative flex items-center gap-10 max-md:gap-5">
          <Image src="/media/paren.svg" alt="" width={26} height={159} className="h-[120px] w-auto -scale-x-100" />
          <div className="w-[170px] border-[3px] border-white max-md:w-[120px]">
            <Image src={footer.ctaThumb} alt="" width={500} height={500} className="block h-auto w-full" />
          </div>
          <Image src="/media/paren.svg" alt="" width={26} height={159} className="h-[120px] w-auto" />
        </div>
        <Sparkle className="relative mt-16 size-3.5 text-white/70" />
      </section>

      <div className="px-[30px] max-md:px-5">
        <div className="grid grid-cols-[1fr_234px_234px_254px] gap-[30px] pt-24 pb-16 max-lg:grid-cols-3 max-md:grid-cols-1">
          <div className="flex flex-col gap-10 max-lg:col-span-3 max-md:col-span-1">
            <Heading as="h3" text={footer.tagline} className="h3 max-w-[560px]" />
            <div className="h-px w-[70px] bg-white/40" />
            <div className="flex flex-col gap-2 text-[17px] tracking-[0.04em]">
              <a href={`mailto:${contact.email}`} className="hover:opacity-70">
                {contact.email}
              </a>
              <a href={`https://${brand.website}`} target="_blank" rel="noreferrer" className="hover:opacity-70">
                {brand.website}
              </a>
            </div>
          </div>

          <FooterColumn title="Pages">
            {nav.map((item, i) => (
              <Link key={item.href} href={item.href} className={i === 0 ? "font-bold" : "text-white/80 hover:text-white"}>
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {footer.connect.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                {item.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Call us">
            {contact.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="text-white/80 hover:text-white">
                <span className="inline-block w-10 text-white/60">{p.region}</span>
                {p.display}
              </a>
            ))}
            <Button href={footer.ctaHref} tone="light" className="mt-6 w-[200px]">
              Start a project
            </Button>
          </FooterColumn>
        </div>

        <Ticker />

        <Link href="/" aria-label={`${brand.name} home`} className="mx-auto block w-fit py-16 max-md:py-10">
          <Image
            src={brand.logoLight.src}
            alt={brand.name}
            width={brand.logoLight.width}
            height={brand.logoLight.height}
            className="h-auto w-[300px] max-md:w-[220px]"
          />
        </Link>

        <div className="flex items-center justify-between gap-4 border-t border-white/20 py-6 text-[14px] text-white/75 max-md:flex-col max-md:items-start">
          <p>
            Designed by <span className="text-white">OHG.GLOBAL</span>
          </p>
          <div className="flex gap-10">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-[15px]">
      <p className="eyebrow mb-3 text-white/70">{title}</p>
      {children}
    </div>
  );
}

function Ticker() {
  // Rendered twice so the -50% loop is seamless.
  const row = [...footer.ticker, ...footer.ticker];
  return (
    <div className="relative overflow-hidden border-y border-white/20 py-[30px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee flex w-max items-center gap-[30px]">
        {row.map((item, i) =>
          "image" in item ? (
            <Image key={i} src={item.image} alt="" width={155} height={100} className="h-[100px] w-[155px] object-cover" />
          ) : (
            <p key={i} className="h5 whitespace-nowrap text-white/85">
              {item.text}
            </p>
          ),
        )}
      </div>
    </div>
  );
}

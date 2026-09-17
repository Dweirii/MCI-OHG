import Image from "next/image";
import Link from "next/link";
import { brand, footer, nav } from "@/content";
import { Button, MixedText, Sparkle } from "./ui";

export function Footer() {
  return (
    <footer className="bg-skin text-dark">
      {/* Call to action over a full-bleed photo that fades into the page. */}
      <section className="relative flex min-h-[900px] flex-col items-center justify-center gap-10 overflow-hidden px-[30px] py-40 max-md:min-h-[640px] max-md:px-5">
        <Image src={footer.ctaImage} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-dark/45" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-skin to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-skin to-transparent" />
        <MixedText
          text={footer.cta}
          script={footer.ctaScript}
          className="h-xl relative max-w-[1300px] text-center leading-[1.05] text-ivory"
        />
        <div className="relative flex items-center gap-10 max-md:gap-5">
          <Image src="/media/paren.svg" alt="" width={26} height={159} className="h-[120px] w-auto -scale-x-100" />
          <div className="w-[170px] border-[3px] border-ivory max-md:w-[120px]">
            <Image src={footer.ctaThumb} alt="" width={500} height={500} className="block h-auto w-full" />
          </div>
          <Image src="/media/paren.svg" alt="" width={26} height={159} className="h-[120px] w-auto" />
        </div>
        <Sparkle className="relative mt-16 size-3.5 text-ivory/70" />
      </section>

      <div className="px-[30px] max-md:px-5">
        <div className="grid grid-cols-[1fr_234px_234px_254px] gap-[30px] pt-24 pb-16 max-lg:grid-cols-3 max-md:grid-cols-1">
          <div className="flex flex-col gap-10 max-lg:col-span-3 max-md:col-span-1">
            <MixedText
              as="h3"
              text={footer.tagline}
              script={footer.taglineScript}
              className="h3 max-w-[560px]"
            />
            <div className="h-px w-[70px] bg-dark/30" />
            <div className="flex flex-col gap-2 font-heading text-[18px] tracking-[-0.03em] uppercase">
              <a href={`mailto:${footer.email}`} className="hover:opacity-70">
                {footer.email}
              </a>
              <a href={`tel:${footer.phone.replace(/\s/g, "")}`} className="hover:opacity-70">
                {footer.phone}
              </a>
            </div>
          </div>

          <FooterColumn title="Pages">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={i === 0 ? "font-medium text-dark" : "text-dark/75 hover:text-dark"}
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {footer.connect.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer" className="text-dark/75 hover:text-dark">
                {item.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn title="Visit">
            <p className="text-dark/75">
              {footer.address[0]}
              <br />
              {footer.address[1]}
            </p>
            <Button href="/contact" tone="dark" className="mt-6 w-[200px]">
              Start a project
            </Button>
          </FooterColumn>
        </div>

        <Ticker />

        <Link href="/" aria-label={`${brand.name} home`} className="mx-auto block w-fit py-16 max-md:py-10">
          <Image
            src={brand.logoDark.src}
            alt={brand.name}
            width={brand.logoDark.width}
            height={brand.logoDark.height}
            className="h-auto w-[300px] max-md:w-[220px]"
          />
        </Link>

        <div className="flex items-center justify-between gap-4 border-t border-dark/15 py-6 text-[14px] text-dark/70 max-md:flex-col max-md:items-start">
          <p>
            Designed by{" "}
            <a href="https://www.webestica.com/" target="_blank" rel="noreferrer" className="text-dark">
              Webestica
            </a>
          </p>
          <div className="flex gap-10">
            <Link href="/legal-pages/privacy-policy" className="hover:text-dark">
              Privacy Policy
            </Link>
            <Link href="/legal-pages/terms-conditions" className="hover:text-dark">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-[14px]">
      <p className="mb-3 text-label text-dark/60">{title}</p>
      {children}
    </div>
  );
}

function Ticker() {
  // Rendered twice so the -50% loop is seamless.
  const row = [...footer.ticker, ...footer.ticker];
  return (
    <div className="relative overflow-hidden border-y border-dark/15 py-[30px] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee flex w-max items-center gap-[30px]">
        {row.map((item, i) =>
          "image" in item ? (
            <Image
              key={i}
              src={item.image}
              alt=""
              width={155}
              height={100}
              className="h-[100px] w-[155px] object-cover"
            />
          ) : (
            <MixedText key={i} as="p" text={item.text} className="h5 whitespace-nowrap text-dark/70" />
          ),
        )}
      </div>
    </div>
  );
}

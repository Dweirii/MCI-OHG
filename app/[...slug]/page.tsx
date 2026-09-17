import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Button, MixedText, Sparkle } from "@/components/ui";
import { comingSoon, comingSoonPaths, pageName } from "@/content";

// Only the site's own links are served here; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return comingSoonPaths.map((href) => ({ slug: href.slice(1).split("/") }));
}

const hrefFor = (slug: string[]) => `/${slug.join("/")}`;

export async function generateMetadata({ params }: PageProps<"/[...slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${pageName(hrefFor(slug)) ?? "Page"} — coming soon | MCI` };
}

export default async function ComingSoonPage({ params }: PageProps<"/[...slug]">) {
  const { slug } = await params;
  const name = pageName(hrefFor(slug));
  if (!name) notFound();

  return (
    <>
      <Nav />
      <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-dark px-5 py-40">
        <Image src={comingSoon.image} alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-dark/65" />

        <div className="fade-in relative z-10 flex flex-col items-center gap-8 text-center">
          <p className="flex items-center gap-2.5 text-label text-ivory/80">
            <Sparkle className="size-2.5 text-skin" />
            {name}
          </p>
          <MixedText
            as="h1"
            text={comingSoon.heading}
            script={comingSoon.headingScript}
            className="h-xl text-ivory"
          />
          <p className="max-w-[440px] text-ivory/80">{comingSoon.body}</p>
          <Button href="/">Back to home</Button>
        </div>
      </main>
    </>
  );
}

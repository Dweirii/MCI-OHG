import Image from "next/image";
import { profile } from "@/content";
import { Button, Container, Eyebrow, Heading } from "./ui";

/** The printed company profile. The mockups share this section's background colour. */
export function Profile() {
  return (
    <section className="bg-profile text-white">
      <Container className="grid grid-cols-[1fr_1fr] items-center gap-16 pt-[110px] pb-10 max-lg:grid-cols-1 max-md:py-20">
        <div className="flex flex-col items-start gap-7">
          <Eyebrow className="text-white/75">{profile.label}</Eyebrow>
          <Heading text={profile.heading} className="h2 max-w-[520px]" />
          <p className="max-w-[420px] text-white/85">{profile.body}</p>
          <Button href={profile.cta.href} tone="light">
            {profile.cta.label}
          </Button>
        </div>
        <Image
          src={profile.images.cover}
          alt="The MCI company profile cover"
          width={2000}
          height={1982}
          sizes="(max-width: 1199px) 100vw, 50vw"
          className="mx-auto h-auto w-full max-w-[620px]"
        />
      </Container>
      <Image
        src={profile.images.spread}
        alt="Inside the MCI company profile: who we are and what we do"
        width={2000}
        height={1312}
        sizes="(max-width: 1199px) 100vw, 1100px"
        className="mx-auto h-auto w-full max-w-[1100px] px-[30px] pb-[110px] max-md:px-5 max-md:pb-20"
      />
    </section>
  );
}

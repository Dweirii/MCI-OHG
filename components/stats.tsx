import { stats } from "@/content";
import { Orbit } from "./orbit";
import { Container, Eyebrow, Heading, Ring } from "./ui";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-paper pt-[150px] pb-[190px] max-md:pt-20 max-md:pb-32">
      <Container className="flex flex-col gap-[70px]">
        <div className="flex flex-col gap-6">
          <Eyebrow className="text-skin-deep">{stats.label}</Eyebrow>
          <Heading text={stats.heading} className="h2 max-w-[900px] text-skin-deep" />
        </div>
        <div className="flex items-start gap-[100px] max-lg:gap-10 max-md:flex-col max-md:items-center">
          <Stat {...stats.left} />
          <div className="flex max-w-[600px] flex-1 flex-col items-center gap-[30px] max-md:order-first max-md:w-full">
            <Orbit images={stats.orbit} />
            <p className="max-w-[420px] text-center text-mocha">{stats.caption}</p>
          </div>
          <Stat {...stats.right} align="right" />
        </div>
      </Container>
      <Ring className="bottom-[50px]" />
    </section>
  );
}

function Stat({
  value,
  label,
  align = "left",
}: {
  value: string;
  label: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex max-w-[290px] flex-1 flex-col gap-2 max-md:items-center max-md:text-center ${
        align === "right" ? "items-end text-right" : "items-start"
      }`}
    >
      <h3 className="h-xl leading-none text-skin">{value}</h3>
      <p className="text-label text-mocha">{label}</p>
    </div>
  );
}

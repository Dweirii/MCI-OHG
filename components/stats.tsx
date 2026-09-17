import { stats } from "@/content";
import { Orbit } from "./orbit";
import { Container, MixedText, Ring } from "./ui";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-skin pt-[150px] pb-[190px] max-md:pt-20 max-md:pb-32">
      <Container className="flex flex-col gap-[70px]">
        <MixedText
          text={stats.heading}
          script={stats.headingScript}
          className="h2 max-w-[1000px] text-dark"
        />
        <div className="flex items-start gap-[100px] max-lg:gap-10 max-md:flex-col max-md:items-center">
          <Stat {...stats.left} />
          <div className="flex max-w-[600px] flex-1 flex-col items-center gap-[30px] max-md:order-first max-md:w-full">
            <Orbit images={stats.orbit} />
            <p className="max-w-[420px] text-center text-dark/80">{stats.caption}</p>
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
      className={`flex max-w-[290px] flex-1 flex-col text-dark max-md:items-center max-md:text-center ${
        align === "right" ? "items-end text-right" : "items-start"
      }`}
    >
      <h3 className="h-xl leading-none">{value}</h3>
      <p className="text-dark/80">{label}</p>
    </div>
  );
}

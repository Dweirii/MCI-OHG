import { visionMission } from "@/content";
import { Container } from "./ui";

/** Vision and mission over the tiled MCI monogram, as in the profile. */
export function VisionMission() {
  return (
    <section className="bg-taupe relative overflow-hidden text-white">
      <div aria-hidden className="bg-monogram absolute inset-0" />
      <Container className="grid grid-cols-2 gap-[120px] py-[150px] max-lg:gap-16 max-md:grid-cols-1 max-md:py-24">
        {visionMission.map((block) => (
          <div key={block.title} className="flex flex-col gap-8">
            <h2 className="text-[34px] font-light tracking-[0.55em] uppercase max-md:text-[26px]">{block.title}</h2>
            <p className="text-[17px] leading-[1.7] font-light text-white/90">“{block.body}”</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

import Hero from "@/components/homepage/Hero";
import MarqueeText from "@/components/homepage/MarqueeText";
import { getTilesData } from "@/lib/data";

export default async function Home() {
  const tiles = await getTilesData()
  const swatches = tiles.slice(0, 9);
  const featuredTiles = tiles.slice(0,4);

  return (
    <div className="bg-(--color-grout)/10 pt-10">
      <Hero swatches={swatches} />
      <MarqueeText featuredTiles={featuredTiles} />
    </div>
  );
}

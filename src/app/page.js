import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import MarqueeText from "@/components/homepage/MarqueeText";
import { getTilesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const tiles = await getTilesData();
  const swatches = tiles.slice(0, 9);
  const featuredTiles = tiles.slice(0, 4);

  return (
    <div>
      {/* Hero section  */}
      <div className="p-28 flex gap-10 flex-col lg:flex-row lg:justify-between lg:items-center">
        {/* Hero Description  */}
        <div className="space-y-4 tracking-tight">
          <h1 className="text-5xl font-bold text-(--color-ink)">
            Discover Your Perfect <br /> Aesthetic
          </h1>
          <p className="text-(--color-ink)/60">
            Browse a curated gallery of ceramic, marble, clay, mosaic <br /> and
            more tiles - find the finish that fits to your next room.
          </p>

          <Link href="/all-tiles">
            <button
              type="button"
              className="px-4 py-2 tracking-tight bg-(--color-glaze) text-(--color-porcelain) rounded-md cursor-pointer"
            >
              Browse Now
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {
            /* Hero Swatches  */
            swatches.map((swatch) => (
              <div key={swatch.id}>
                <Image
                  src={swatch.image}
                  alt={swatch.title}
                  width={100}
                  height={100}
                  className="w-full  rounded-md"
                />
              </div>
            ))
          }
        </div>
      </div>

      <MarqueeText featuredTiles={featuredTiles} />

      {/* Featured Tiles section  */}
      <FeaturedTiles tiles={featuredTiles} />
    </div>
  );
}

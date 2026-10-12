import { getTilesData } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const tiles = await getTilesData()
  console.log(tiles, "tiles")
  return (
    <div>
      <h1>{tiles.length}</h1>
    </div>
  );
}

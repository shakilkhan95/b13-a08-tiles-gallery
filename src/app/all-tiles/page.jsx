import SearchInput from "@/components/all-tiles-page/SearchInput";
import TileCard from "@/components/shared/TileCard";
import { getTilesDataBySearch } from "../../lib/data";
import { Suspense } from "react";


const AllTilesPage = async({searchParams}) => {
    
    return (
      <div className="p-16 container mx-auto space-y-5">
        <h1 className="text-2xl font-semibold">All Tiles</h1>
        <SearchInput />
        <Suspense fallback={<p>Loading...</p>}>
          <TilesList searchParams={searchParams} />
        </Suspense>
      </div>
    );
};

const TilesList = async ({searchParams}) => {
  const { search } = await searchParams;
  const tiles = await getTilesDataBySearch(search || "");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tiles.map((tile) => (
        <TileCard key={tile.id} tile={tile} />
      ))}
    </div>
  );
}

export default AllTilesPage;
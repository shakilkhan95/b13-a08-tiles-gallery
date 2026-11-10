import TileCard from "@/components/shared/TileCard";
import { getTilesData } from "@/lib/data";
import { Button, Label, SearchField } from "@heroui/react";


const AllTilesPage = async() => {
    const tiles = await getTilesData();
    return (
      <div className="p-16 container mx-auto space-y-5">
        <h1 className="text-2xl font-semibold">All Tiles</h1>

        <SearchField name="search">
          <Label>Search</Label>
          <SearchField.Group>
            <SearchField.SearchIcon />
            <SearchField.Input placeholder="Search..." />
            <SearchField.ClearButton />
            <Button variant="primary" className="ml-2">
              Search
            </Button>
          </SearchField.Group>
        </SearchField>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map(tile => <TileCard key={tile.id} tile={tile}/>)}
        </div>
      </div>
    );
};

export default AllTilesPage;
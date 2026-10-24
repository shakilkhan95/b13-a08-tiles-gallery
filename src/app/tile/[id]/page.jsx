import { getTilesDataByID } from "@/lib/data";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


const TileDetailsPageContent = async({params}) => {
    const {id} = await params;
    const tile = await getTilesDataByID(id);
    return (
      <div className="p-28">
        <Card className="w-full items-stretch md:flex-row gap-10 rounded-md">
          <div className="flex-1 relative w-full shrink-0 overflow-hidden rounded-md">
            <Image
              alt="Cherries"
              width={100}
              height={100}
              className=" inset-0 h-full w-full relative object-cover"
              src={tile.image}
            />
            <Chip
              color={tile.inStock ? "secondary" : "danger"}
              className="absolute right-3 top-3"
            >
              {tile.inStock ? "In Stock" : "Out of Stock"}
            </Chip>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-5">
              <Card.Title className="pe-8 text-2xl font-semibold">
                {tile.title}
              </Card.Title>
              <Card.Description className="space-y-2 text-xl">
                {tile.description}
              </Card.Description>
              <div className="mt-5">
                <p>
                  Material:{" "}
                  <span className="text-black font-medium">
                    {tile.material}
                  </span>
                </p>
                <p>
                  Dimensions:{" "}
                  <span className="text-black font-medium">
                    {tile.dimensions}
                  </span>
                </p>
              </div>
            </Card.Header>
            <Card.Footer>
              <p className="font-semibold text-lg text-(--color-glaze)">
                Price: {tile.currency} {tile.price}
              </p>
            </Card.Footer>
          </div>
        </Card>

        <Link href={"/all-tiles"} className="flex justify-center mt-5">
          <Button variant="primary">
            Go Back
          </Button>
        </Link>
      </div>
    );
};

export default async function TileDetailsPage({ params }) {
  return (
    <Suspense fallback={"loading...."}>
      <TileDetailsPageContent params={params} />
    </Suspense>
  );
};
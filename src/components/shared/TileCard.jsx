import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TileCard = ({tile}) => {
  return (
    <Card className="w-full items-stretch rounded-md">
      <div className="relative w-full shrink-0 overflow-hidden rounded-md">
        <Image
          alt="Cherries"
          width={100}
          height={100}
          className=" inset-0 h-full w-full relative object-cover"
          src={tile.image}
        />
        {!tile.inStock && (
          <Chip color="danger" className="absolute right-3 top-3">Out of stock</Chip>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pe-8">{tile.title}</Card.Title>
          <Card.Description>
            <span>{tile.material} : </span>
            <span>{tile.dimensions}</span>
          </Card.Description>
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-lg text-(--color-glaze)">
            USD {tile.price}
          </p>
          <Link href={`/all-tiles/${tile.id}`}>
            <Button variant="secondary" className="w-full sm:w-auto">Details</Button>
          </Link>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TileCard;

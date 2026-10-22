import { Button, Card } from "@heroui/react";
import Image from "next/image";

const TileCard = ({tile}) => {
  return (
    <Card
      className="w-full items-stretch">
      <div className="relative w-full shrink-0 overflow-hidden rounded-2xl">
        <Image
          alt="Cherries"
          width={100}
          height={100}
          className=" inset-0 h-full w-full relative object-cover"
          src={tile.image}
        />
        {!tile.inStock && (
          <Button variant="secondary" className="absolute end-3 top-3">
            Out of stock
          </Button>
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
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default TileCard;

import Marquee from "react-fast-marquee";

const MarqueeText = async ({ featuredTiles }) => {

  return (
    <div className="border-y border-(--color-grout)/40 bg-(--color-base-200) py-2.5">
      <Marquee pauseOnHover>
        {featuredTiles.map((tile) => (
          <span
            className="text-(--color-ink)/80 font-medium text-xl mr-2"
            key={tile.id}
          >{`${tile.title}: "${tile.description}"`}</span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeText;

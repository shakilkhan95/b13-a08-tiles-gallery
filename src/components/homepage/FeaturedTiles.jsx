"use client"
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import TileCard from "../shared/TileCard";

const FeaturedTiles = ({ tiles }) => {
  return (
    <div className="space-y-5 my-16 md:w-10/12 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Featured Tiles</h1>
        <Link href="/all-tiles" className="text-(--color-glaze) underline">
          View all tiles
        </Link>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        scrollbar={{ draggable: true }}
      >
        {tiles.map((tile) => (
          <SwiperSlide key={tile.id}><TileCard tile={tile}/></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedTiles;

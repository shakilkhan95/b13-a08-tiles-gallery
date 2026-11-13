export const getTilesData = async () => {
  const res = await fetch(
    "https://b13-a08-tiles-gallery-server.onrender.com/tiles",
    {
      cache: "force-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getTilesDataByID = async (id) => {
  const res = await fetch(
    `https://b13-a08-tiles-gallery-server.onrender.com/tiles/${id}`,
    {
      cache: "force-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getTilesDataBySearch = async (search) => {
  const res = await fetch(
    "https://b13-a08-tiles-gallery-server.onrender.com/tiles",
    {
      cache: "force-cache",
    },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const filteredData = data.filter((tile) =>
    tile.title.toLowerCase().includes(search),
  );
  return filteredData;
};
export const getTilesData = async() => {
    const res = await fetch(
      "https://b13-a08-tiles-gallery-server.onrender.com/tiles",
      {
        cache: "force-cache"
      }
    );
    if(!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}
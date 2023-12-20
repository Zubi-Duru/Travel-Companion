export const GET = async (req, res) => {
    const url = new URL(req.url);
  
    const lat =  url.searchParams.get("lat");
    const lng =  url.searchParams.get("lng");

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat + "," + lng}&radius=15000&type=tourist-attraction&key=${process.env.GOOGLE_MAPS_KEY}`
      );
      const data = await response.json();
      return new Response(JSON.stringify({ data }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Google Places Unavailable" }), { status: 500 });
    }
  };


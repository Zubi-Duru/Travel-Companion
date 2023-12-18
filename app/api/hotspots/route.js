export const GET = async (req, res) => {
    const url = new URL(req.url);
  
    let location={
        lat:4.847222599999999,
        lng:6.974603999999999
    }
    const {lat,lng} = location ;
    // url.searchParams.get("input")
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
  

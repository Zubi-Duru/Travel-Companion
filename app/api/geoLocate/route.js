export const GET = async (req, res) => {
  const url = new URL(req.url);
  const address = url.searchParams.get("address");
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_KEY}`
    );
    const data = await response.json();
    const geoLocation=data.results[0].geometry.location
    console.log(data.results[0].geometry.location);
    return new Response(JSON.stringify({ geoLocation }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Google Places Unavailable" }),
      { status: 500 }
    );
  }
};

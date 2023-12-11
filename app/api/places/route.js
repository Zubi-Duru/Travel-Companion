export const GET = async (req, res) => {
  const url = new URL(req.url);

  const input = url.searchParams.get("input");
  const country = url.searchParams.get("country");
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=%28cities%29&components=country:${country}&key=${process.env.GOOGLE_MAPS_KEY}`
    );
    const data = await response.json();
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Google Places Unavailable" }), { status: 500 });
  }
};

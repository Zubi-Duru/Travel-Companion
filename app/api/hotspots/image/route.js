export const GET = async (req, res) => {
  const url = new URL(req.url);

  const photoid = url.searchParams.get("photoid");
  try {
    return new Response(
      JSON.stringify({
        data: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photo_reference=${photoid}&key=${process.env.GOOGLE_MAPS_KEY}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Google Places Unavailable" }),
      { status: 500 }
    );
  }
};

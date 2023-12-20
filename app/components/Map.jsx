import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const loaderOptions = {
  apiKey: "AIzaSyCJYMg-mfh3rj1YTrQWqg6INf29xQAKLx8",
  version: "weekly",
};

export default function Map({ geoCode }) {
  const mapOptions = {
    center: {
      lat: geoCode.lat,
      lng: geoCode.lng,
    },
    zoom: 15,
  };

  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader(loaderOptions);
    loader
      .importLibrary("maps")
      .then(({ Map }) => {
        const map = new Map(mapRef.current, mapOptions);
        new google.maps.Marker({
          map,
          position: mapOptions.center,
        });
      })
      .catch((e) => {
        // do something
        console.error(`Geocode was not successful`);
      });
  }, [mapOptions.center]);

  return (
    <div
      className="max-h-[90vh] h-[300px] md:h-full w-full"
      ref={mapRef}
    ></div>
  );
}

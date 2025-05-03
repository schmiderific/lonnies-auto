// Home.tsx
import { Helmet } from "react-helmet";
import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer, MarkerF } from "@react-google-maps/api";

export default function Directions() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [origin, setOrigin] = useState<string>("");
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const destinationLatLng = { lat: 36.02318, lng: -78.94929 }; // Shop's Lat/Long
  const destination = "220 Butler Ave, Durham, NC, 27705"; // Shop's actual address
  const apiKey = process.env.GOOGLE_API_KEY;

  const fetchDirections = async (start: string) => {
    if (!start || !isMapLoaded) return;
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: start,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  useEffect(() => {
    const mapFrom = searchParams.get("mapfrom") || "";
    if (mapFrom) {
      setOrigin(mapFrom);
      if (mapFrom && isMapLoaded) {
        fetchDirections(mapFrom);
      }
    }
  }, [location.search, isMapLoaded]);

  return (
    <>
      <Helmet>
        <title>Directions Page Title</title>
        <meta
          name="description"
          content="This is the Directions page description."
        />
        <meta property="og:title" content="Home Page Title" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <div
        className="flex flex-col p-4 items-center">
      <div
        className="flex w-full max-w-4xl mb-4 gap-2"
      >
        <input
          type="text"
          placeholder="Enter your starting address"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") fetchDirections(origin); }}
          autoComplete="off"
          inputMode="text"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={() => fetchDirections(origin)}
          className="p-2 text-white bg-blue-600 rounded"
        >
          Get Directions
        </button>
      </div>

      <div
        className="flex w-full max-w-6xl gap-6"
      >
        {/* LEFT: Step-by-step directions */}
        {directions &&
        <div
          className="overflow-y-auto w-1/3 max-h-[600px] p-4 border rounded shadow"
        >
          {directions && directions.routes[0].legs[0].steps.map((step, index) => (
            <div
              key={index}
              className="mb-3 text-sm"
            >
              <div dangerouslySetInnerHTML={{ __html: step.instructions }} />
              <div
                className="text-gray-500"
              >
                {step.distance?.text} — {step.duration?.text}
              </div>
            </div>
          ))}
        </div>
        }

        {/* RIGHT: Map */}
        <div
          className={directions ? "w-2/3 h-[600px]" : "w-full flex justify-center h-[600px]"}>
          <LoadScript 
            googleMapsApiKey={apiKey}
            onLoad={() => setIsMapLoaded(true)}>
            <GoogleMap
              center={ destinationLatLng } // Center somewhere reasonable
              zoom={14}
              mapContainerStyle={{ height: "100%", width: "100%" }}
              onLoad={(map) => { mapRef.current = map; }}
            >
              {directions ? (
                <DirectionsRenderer directions={directions} />
              ) : (
                <MarkerF key="destination-marker" position={destinationLatLng} label="*" />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      </div>
    </>
  );
}
  {/* );
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Directions
        </h1>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            Our shop is conveniently located in Durham, NC, just off 15-501 and
            Hillsborough Rd. Whether you're coming from downtown, RTP, or Chapel
            Hill, getting to us is easy.
          </p>
          <p>
            Address:
            <br />
            <span className="font-semibold">
              220 Butler Ave.
              <br />
              Durham, NC 27705
            </span>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:9193097898" className="text-blue-600 hover:underline">
              (919) 309-7898
            </a>
          </p>
        </div>

        <div className="overflow-hidden rounded-xl shadow-lg aspect-w-16 aspect-h-9">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.948750493935!2d-78.89861968469358!3d36.01239017929978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ace474cf4322a5%3A0x2f9cc5d67aa3ea5c!2sNorthgate%20Auto%20Service!5e0!3m2!1sen!2sus!4v1611690470497!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </>
  ); */}

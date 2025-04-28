// Home.tsx
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Directions() {
  const [origin, setOrigin] = useState("");
  const [mapSrc, setMapSrc] = useState("");
  const location = useLocation();

  const destination = "220 Butler Ave, Durham, NC, 27705"; // Shop's actual address
  const apiKey = "AIzaSyBZapVwghZDS3WL_eudPVBgmWRHB-dCGEQ"; // Your API key here

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const mapFrom = searchParams.get("mapfrom");

    if (mapFrom) {
      setOrigin(mapFrom);
      updateMap(mapFrom);
    }
  }, [location.search]);

  const updateMap = (start: string) => {
    const originEncoded = encodeURIComponent(start);
    const destinationEncoded = encodeURIComponent(destination);
    const newMapSrc = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${originEncoded}&destination=${destinationEncoded}`;
    setMapSrc(newMapSrc);
  };

  const handleGetDirections = () => {
    updateMap(origin);
  };

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
      <div className="min-h-screen flex flex-col items-center justify-start p-6 space-y-6">
        <h1 className="text-3xl font-bold">Get Directions</h1>

        <div className="w-full max-w-md flex gap-2">
          <input
            type="text"
            placeholder="Enter your address"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleGetDirections}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Get Directions
          </button>
        </div>

        {mapSrc && (
          <div className="w-full max-w-4xl h-[500px] mt-6">
            <iframe
              title="Google Map Directions"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              src={mapSrc}
              className="rounded shadow-lg"
            ></iframe>
          </div>
        )}
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

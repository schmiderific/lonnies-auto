import React, { useState } from "react";

// components/Footer.tsx
const GetDirections = () => {
  const [origin, setOrigin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin) return;

    const destination = encodeURIComponent(
      "220 Butler Avenue, Durham, NC 27705",
    );
    const encodedOrigin = encodeURIComponent(origin);
    // const url = `https://www.google.com/maps/dir/?api=1&origin=${encodedOrigin}&destination=${destination}`;
    const url = `/Directions?api=1&origin=${encodedOrigin}&destination=${destination}`;

    window.open(url, "_blank");
  };

  return (
    <footer id="contact" className="py-12 text-white bg-blue-900">
      <div className="grid md:grid-cols-2 max-w-6xl mx-auto px-4 gap-12">
        <div>
          <h3 className="mb-4 text-2xl font-semibold">Contact Us</h3>
          <p className="mb-2">📍 220 Butler Avenue, Durham, NC, USA</p>
          <p className="mb-2">
            📞{" "}
            <a href="tel:9193097898" className="underline">
              919-309-7898
            </a>
          </p>
          <p className="mt-6 text-sm text-gray-300">
            © 2025 Lonnie's University Auto. All rights reserved.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">Get Directions</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row mt-4 gap-2 sm:items-center"
          >
            <input
              type="text"
              placeholder="Enter your address"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="
                flex-1
                w-full sm:w-auto
                px-4 py-2
                text-white-900 placeholder-gray-500
                rounded-lg border border-gray-300
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
            <button
              type="submit"
              className="px-4 py-2 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default GetDirections;

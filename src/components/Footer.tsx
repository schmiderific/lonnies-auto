import { useState } from "react";
import { useNavigate } from "react-router-dom";

// components/Footer.tsx
const Footer = () => {
  const [origin, setOrigin] = useState("");
  const navigate = useNavigate();

  const handleGetDirections = () => {
    if (origin.trim() !== "") {
      const originEncoded = encodeURIComponent(origin);
      navigate(`/directions?mapfrom=${originEncoded}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleGetDirections();
    }
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
          <div className="flex w-full max-w-4xl mb-4 gap-2">
          <input
            type="text"
            placeholder="Enter your starting address"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border p-2 rounded w-full"
            autoComplete="off"
            inputMode="text"
          />
          <button
            onClick={handleGetDirections}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Get Directions
          </button>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

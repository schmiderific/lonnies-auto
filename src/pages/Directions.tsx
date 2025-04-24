// Home.tsx
import { Helmet } from "react-helmet";

export default function Directions() {
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

        <div className="space-y-2 text-lg text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">
            Driving Directions
          </h2>
          <p>
            <span className="font-semibold">From I-85:</span>
            Take <span className="font-semibold">Exit 105A</span> onto{" "}
            <span className="font-semibold">15-501 South</span>. Take the{" "}
            <span className="font-semibold">first exit</span> for{" "}
            <span className="font-semibold">Hillsborough Road</span> and turn{" "}
            <span className="font-semibold">right</span> at the end of the ramp.
            Then take the <span className="font-semibold">next right</span> onto{" "}
            <span className="font-semibold">Christian Avenue</span>. Make a{" "}
            <span className="font-semibold">right on Wortham Street</span> and
            follow it to the end. Turn{" "}
            <span className="font-semibold">left onto Butler Avenue</span> —
            we’ll be just down the road.
          </p>
          <p>
            <span className="font-semibold">From Downtown Durham:</span> Head
            north on Duke Street, then west on Hillsborough. Take the same
            directions as above after you cross over 15-501.
          </p>
        </div>
      </div>
    </>
  );
}

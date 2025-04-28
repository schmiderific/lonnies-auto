// Home.tsx
import { Helmet } from "react-helmet";
import lonniesImage from '../assets/lonnies.png';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page Title</title>
        <meta name="description" content="This is the home page description." />
        <meta property="og:title" content="Home Page Title" />
        {/* Add more meta tags as needed */}
      </Helmet>
      <section className="p-8 mb-10 bg-gray-100 rounded-lg relative shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Reliable Auto Repair, Right Around the Corner
            </h1>
            <p className="mb-6 text-lg text-gray-700">
              Serving your community with honest, top-quality service. Same-day
              appointments available!
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 text-white bg-blue-700 rounded-full hover:bg-blue-800 transition"
            >
              Schedule an Appointment
            </a>
          </div>
          <div>
            <img
              src={lonniesImage}
              alt="Lonnie's Office"
              className="w-full h-auto rounded-lg shadow"
            />
          </div>
        </div>
      </section>
      <section id="services" className="py-12 bg-white">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              Brake Repair
            </h3>
            <p className="text-gray-700">
              We offer expert diagnostics and fast brake repairs using quality
              parts you can trust.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              Oil Changes
            </h3>
            <p className="text-gray-700">
              Quick, clean, and affordable oil changes to keep your engine
              running smoothly.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              Diagnostics
            </h3>
            <p className="text-gray-700">
              Using state-of-the-art tools to identify and solve car problems
              fast.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              Tire Services
            </h3>
            <p className="text-gray-700">
              Tire rotations, repairs, and replacements to extend tire life and
              improve safety.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              Scheduled Maintenance
            </h3>
            <p className="text-gray-700">
              Stay ahead of costly repairs with regular maintenance tailored to
              your vehicle.
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="mb-2 text-xl font-semibold text-blue-700">
              AC & Heating
            </h3>
            <p className="text-gray-700">
              Make sure your cabin stays cool in summer and warm in winter with
              expert HVAC service.
            </p>
          </div>
        </div>
      </section>
      <section id="reviews" className="py-12 bg-gray-100">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “Absolutely the best experience I’ve had at a repair shop. Honest
              and quick!”
            </p>
            <p className="mt-4 font-semibold text-blue-700">– Sarah L.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “They diagnosed my issue in minutes and had me back on the road
              same day.”
            </p>
            <p className="mt-4 font-semibold text-blue-700">– Mike D.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-700 italic">
              “Professional and friendly. My go-to shop from now on.”
            </p>
            <p className="mt-4 font-semibold text-blue-700">– Dana R.</p>
          </div>
        </div>
      </section>
    </>
  );
}
